export const programDefs = `
  # queries
  
  type Query {
    getPrograms(search: ProgramSearchInput): [Program]
  }
  
  # types
  
  type Program {
    id: ID!
    name: String!
  }
  
  # inputs
  
  input ProgramSearchInput {
    name: String
  } 
`;

export const programResolvers = {
  Query: {
    getPrograms: async () => shows
  }
};

const shows =  [
  { id: 1, name: 'A Team' },
  { id: 2, name: 'Battlestar Galactica' },
  { id: 3, name: 'Knight Rider' }
];
