// imports
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

/**
 * Seed the database with categories
 */
const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    /* It calls the function `seedCategories` which is defined in `./category-seeds.js` */
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    process.exit(0);
};

seedAll();
