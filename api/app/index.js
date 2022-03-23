import 'source-map-support/register';
import express from 'express';
import bodyParser from 'body-parser';

import logging from 'middleware/logging';

import server from './server';

const app = express();

// set up basic middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// application middleware
app.use(logging());

// wire per currency APIs
server(app);


if (import.meta.env.PROD) {
  app.listen(3000);
}

// eslint-disable-next-line import/prefer-default-export
export const viteNodeApp = app;
