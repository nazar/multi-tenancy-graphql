import _ from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { impressionDefs, impressionResolvers } from './impressions';

export default makeExecutableSchema({
  typeDefs: [
    impressionDefs
  ],

  resolvers: _.merge(
    impressionResolvers
  )
});
