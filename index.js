
const { GraphQLServer } = require('graphql-yoga')
const  Query = require('./queries')
require('dotenv').config()

console.log('process.env.FOCUSTER_API', process.env.FOCUSTER_API)


// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// }

const server = new GraphQLServer({ typeDefs: `./schema.graphql`, resolvers: {Query} })
server.start(() => console.log('Server is running on localhost:4000'))



// /api/v1/actions.json[?completed=1]

// Optional Query parameters:
// completed=1 => only completed actions
