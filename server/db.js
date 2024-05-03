import Sequelize from 'sequelize';

const sequelize = new Sequelize('grocery_app', 'root', 'YoMama2024!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');
} catch (error) {
    console.error('Unable to connect to database.', error);
}

export default sequelize;