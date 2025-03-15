import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schemas.js";
import db from "./db.js";

const resolvers = {
  Query: {
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
    games() {
      return db.games;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((d) => d.id !== args.id);
      return db.games;
    },
    addGame(_, args) {
      let game = { ...args.game, id: Math.floor(Math.random() * 1000) };
      db.games.push(game);
      return game;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server listening on port 4000`);
