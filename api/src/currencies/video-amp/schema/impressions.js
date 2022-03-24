export const impressionDefs = `
  # queries
  
  type Query {
    getImpressions(search: ImpressionSearchInput): [Impression]
  }
  
  # types
  
  type Impression {
    id: ID!
    programId: ID!
    impressions: Int
  }
  
  # inputs
  
  input ImpressionSearchInput {
    programId: ID!
  } 
`;

export const impressionResolvers = {
  Query: {
    getImpressions: async () => impressions
  }
};

const impressions =  [
  { id: 1, programId: 1, impressions: 1 },
  { id: 2, programId: 2 },
  { id: 3, programId: 3, impressions: 2 }
];
