-- Migration script to add soft-delete functionality
-- Run this script on your database to add the necessary columns and tables

-- Add status and deleted_at columns to existing tables
ALTER TABLE memberships ADD COLUMN status VARCHAR(64) NULL;
ALTER TABLE memberships ADD COLUMN deleted_at DATETIME NULL;

ALTER TABLE special_members ADD COLUMN status VARCHAR(64) NULL;
ALTER TABLE special_members ADD COLUMN deleted_at DATETIME NULL;

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
