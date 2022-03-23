export const impressionDefs = `
  # queries
  
  type Query {
    getImpressions(search: ImpressionSearchInput): [Impression]
  }
  
  # types
  
  type Impression {
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
  { programId: 1, impressions: 1 },
  { programId: 2 },
  { programId: 3, impressions: 2 }
];
