import express from 'express';
import './db.js';
import './models.js';
import sequelize from './db.js';
import router from './routes.js';

const PORT = process.env.PORT || 3001;

const app = express();

// CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

await sequelize.sync({ alter: true });
console.log('All models were synchronized successfully.');