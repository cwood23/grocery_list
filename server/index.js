import express from 'express';
import './db.js';
import './models.js';
import sequelize from './db.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

await sequelize.sync({ alter: true });
console.log('All models were synchronized successfully.');