// Test script to verify soft-delete functionality
// Run this with: node test_soft_delete.js

const db = require('./src/config/db');

async function testDatabaseSetup() {
    try {
        console.log('Testing database setup for soft-delete functionality...\n');
        
        // Check if previous_members table exists
        const [tables] = await db.query("SHOW TABLES LIKE 'previous_members'");
        if (tables.length === 0) {
            console.log('❌ previous_members table does not exist!');
            console.log('Please run the database_migration.sql script first.\n');
            return;
        }
        console.log('✅ previous_members table exists');
        
        // Check if status columns exist
        const tables_to_check = ['memberships', 'special_members', 'volunteers', 'franchises'];
        
        for (const table of tables_to_check) {
            const [columns] = await db.query(`SHOW COLUMNS FROM ${table} LIKE 'status'`);
            if (columns.length === 0) {
                console.log(`❌ ${table} table missing 'status' column`);
            } else {
                console.log(`✅ ${table} table has 'status' column`);
            }
            
            const [deletedColumns] = await db.query(`SHOW COLUMNS FROM ${table} LIKE 'deleted_at'`);
            if (deletedColumns.length === 0) {
                console.log(`❌ ${table} table missing 'deleted_at' column`);
            } else {
                console.log(`✅ ${table} table has 'deleted_at' column`);
            }
        }
        
        console.log('\n🎉 Database setup check complete!');
        console.log('If you see any ❌ errors above, please run the database_migration.sql script.');
        
    } catch (error) {
        console.error('Error testing database setup:', error);
    } finally {
        process.exit(0);
    }
}

testDatabaseSetup();
