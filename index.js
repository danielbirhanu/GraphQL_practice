import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typedefs } from "./schemas";

const server = new ApolloServer({
    typedefs
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log("Server listening on port 4000")