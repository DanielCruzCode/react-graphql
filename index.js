const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: {
        isAuthenticateUser: true
    }
});

server.listen().then(({ url }) => {
    console.log(`Server running on URL ${url}`);
});

