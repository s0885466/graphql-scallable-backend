import {ApolloServer} from 'apollo-server';
import {resolvers} from "./common/resolvers.js";
import typeDefs from "./common/types.graphql";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Apollo server is ready at ${url}`);
}).catch(err => {console.error(err)});