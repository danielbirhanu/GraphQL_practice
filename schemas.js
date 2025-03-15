export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!] # Fixed field name
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        author: Author!
        game: Game!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!] # Fixed field name
    }

    type Query {
        authors: [Author]
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game # Added missing field
    }

    type Mutation {
        addGame(game: addGameInput): Game
        deleteGame(id: ID): [Game]
    }

    input addGameInput {
        title: String!
        platform: [String!]!
    }
`;
