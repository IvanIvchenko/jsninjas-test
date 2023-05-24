import http from 'http';

import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import { sequelize } from './src/connector/index.js';
import { routes } from './src/routes/index.js';

const app = express();

app.use(express.json());

// Cors setup
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    allowedHeaders:
      'Origin, Authorization, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  }),
);

sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

// Attaches a value of startTimer which will be the indicator for how long it took for the request to be handled.
app.use((req, res, next) => {
  console.log('----------------------');
  console.log(`New Request, Target: ${req.method} - ${req.baseUrl}`);
  next();
});
app.use(routes);

// 404 handler
app.use((req, res) => {
  res.status(404).send({ error: 'Not found' });
});

// Other errors
app.use((err, req, res, next) => {
  console.error('Server error caught');
  console.log(err);
  res.status(500).send();
});

const APP_PORT = process.env.PORT || 4000;

const server = http.createServer(app);

function setupServer(): void {
  // app.set('port', PORT);
  server.listen(APP_PORT);
}
// Server setup
setupServer();
