import _ from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { programDefs, programResolvers } from './program';

export default makeExecutableSchema({
  typeDefs: [
    programDefs
  ],

  resolvers: _.merge(
    programResolvers
  )
});
