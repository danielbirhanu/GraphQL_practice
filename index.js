import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typedefs } from "./schemas";
import db from "./db"

const resolvers = {
    Query: {
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        },
        games(){
            return db.authors
        },
    }
}

const server = new ApolloServer({
    typedefs
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log("Server listening on port 4000")