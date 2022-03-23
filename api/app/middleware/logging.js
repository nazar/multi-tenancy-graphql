import _ from 'lodash';
import morgan from 'morgan';

import logger from 'services/logger';

export default function logging() {
  const logging = morgan((tokens, req, res) => {
    logger.request('request', {
      graphOperation: tokens.graphOperation(req),
      status: tokens.status(req, res),
      remoteAddress: tokens.remoteAddress(req),
      contentLength: tokens.res(req, res, 'content-length'),
      responseTime: tokens['response-time'](req, res),
      referrer: tokens.referrer(req, res),
      requestPayload: tokens.requestPayload(req, res),
      tokenPayload: tokens.tokenPayload(req)
    });
  });

  morgan.token('requestPayload', (req) => {
    let payload;

    if (req.method.toUpperCase() === 'GET') {
      payload = req.query;
    } else {
      payload = req.body;
    }

    return payload;
  });

  morgan.token('graphOperation', (req) => {
    return _.get(req, 'body.operationName') || `${req.method} ${req.path}`;
  });

  morgan.token('tokenPayload', (req) => {
    return req.tokenPayload;
  });

  morgan.token('remoteAddress', (req) => {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  });

  return logging;
}
