import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schemas.js";
import db from "./db.js"

const resolvers = {
    Query: {
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        },
        games(){
            return db.games
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log("Server listening on port 4000")