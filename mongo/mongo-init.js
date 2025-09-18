// MongoDB initialization script
// This script creates the application user in the okteto database

db = db.getSiblingDB('okteto');

db.createUser({
  user: 'okteto',
  pwd: 'mongodb123',
  roles: [
    {
      role: 'readWrite',
      db: 'okteto'
    }
  ]
});

print('User okteto created successfully in okteto database');