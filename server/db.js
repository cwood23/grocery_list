import Sequelize from 'sequelize';

const sequelize = new Sequelize('grocery_app', 'root', 'YoMama2024!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');

}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

export default sequelize;