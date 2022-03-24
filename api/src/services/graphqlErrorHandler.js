import _ from 'lodash';

import logger from './logger';

export default {
  requestDidStart() {
    return {
      didEncounterErrors(requestContext) {
        const context = requestContext.context;

        _.chain(requestContext)
          .get('errors')
          .each((error) => {
            // error can either be an error object or contain an array
            // in error.originalError.errors
            if (_.isEmpty(error.originalError)) {
              logger.error('graphQL Error:', {
                error,
                path: error.path,
                tokenPayload: context.tokenPayload,
                requestId: context.requestId,
                body: context.body
              });
            } else if (_.isArray(error.originalError.errors)) {
              _.each(error.originalError.errors, (originalError) => {
                logger.error('graphQL Error:', {
                  error: originalError,
                  path: error.path,
                  tokenPayload: context.tokenPayload,
                  requestId: context.requestId,
                  body: context.body
                });
              });
            } else {
              logger.error('graphQL Error:', {
                error: error.originalError,
                path: error.path,
                tokenPayload: context.tokenPayload,
                requestId: context.requestId,
                body: context.body
              });
            }
          })
          .value();
      }
    };
  }
};
