-- Migration script to add soft-delete functionality
-- Run this script on your database to add the necessary columns and tables

-- Add status and deleted_at columns to existing tables
ALTER TABLE memberships ADD COLUMN status VARCHAR(64) NULL;
ALTER TABLE memberships ADD COLUMN deleted_at DATETIME NULL;
-- Add donation_amount column and remove membership_type dependency
ALTER TABLE memberships ADD COLUMN donation_amount DECIMAL(10,2) NULL;
-- Note: If you want to remove membership_type column entirely, uncomment the next line:
-- ALTER TABLE memberships DROP COLUMN membership_type;

ALTER TABLE special_members ADD COLUMN status VARCHAR(64) NULL;
ALTER TABLE special_members ADD COLUMN deleted_at DATETIME NULL;
-- Add payments JSON array for special members (6 periods, default all false)
ALTER TABLE special_members ADD COLUMN payments JSON NULL DEFAULT (json_array(false,false,false,false,false,false));

ALTER TABLE volunteers ADD COLUMN status VARCHAR(64) NULL;
ALTER TABLE volunteers ADD COLUMN deleted_at DATETIME NULL;

ALTER TABLE franchises ADD COLUMN status VARCHAR(64) NULL;
ALTER TABLE franchises ADD COLUMN deleted_at DATETIME NULL;

-- Create previous_members table to store deleted records
CREATE TABLE IF NOT EXISTS previous_members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    removed_from VARCHAR(50) NOT NULL COMMENT 'Source table: memberships, special_members, volunteers, franchise',
    original_id INT NULL COMMENT 'Original ID from the source table',
    name VARCHAR(255) NULL,
    phone_number VARCHAR(20) NULL,
    address TEXT NULL,
    email VARCHAR(255) NULL,
    extra JSON NULL COMMENT 'Full record data from source table',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_removed_from (removed_from),
    INDEX idx_original_id (original_id),
    INDEX idx_created_at (created_at)
);

-- Optional: Add indexes for better performance on soft-delete queries
CREATE INDEX idx_memberships_status ON memberships(status);
CREATE INDEX idx_special_members_status ON special_members(status);
CREATE INDEX idx_volunteers_status ON volunteers(status);
CREATE INDEX idx_franchises_status ON franchises(status);

-- Experiences table to store multiple experiences per entity
CREATE TABLE IF NOT EXISTS experiences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entity_type ENUM('members','special_members','volunteers','franchises') NOT NULL,
    entity_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_entity (entity_type, entity_id),
    INDEX idx_created_at_exp (created_at)
);
