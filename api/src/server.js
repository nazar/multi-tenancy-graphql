import { ApolloServer } from 'apollo-server-express';
import { mergeSchemas } from '@graphql-tools/schema';

import graphqlErrorHandler from 'services/graphqlErrorHandler';

import schemaGlobal from 'schema';
import schemaNielsen from 'currencies/nielsen/schema';
import schemaVideoAmp from 'currencies/video-amp/schema';

export default async function server(app) {
  const nielsenSchema = mergeSchemas({ schemas: [schemaGlobal, schemaNielsen] });
  const serverNielsen = new ApolloServer({
    schema: nielsenSchema,
    plugins: [
      graphqlErrorHandler
    ]
  });

  await serverNielsen.start();

  serverNielsen.applyMiddleware({
    app,
    path: '/api/graphql/nielsen'
  });


  const videoAmpSchema = mergeSchemas({ schemas: [schemaGlobal, schemaVideoAmp] });
  const serverVideoAmp = new ApolloServer({
    schema: videoAmpSchema,
    plugins: [
      graphqlErrorHandler
    ]
  });

  await serverVideoAmp.start();

  serverVideoAmp.applyMiddleware({
    app,
    path: '/api/graphql/video-amp'
  });
}
