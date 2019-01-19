
const { GraphQLServer } = require('graphql-yoga')
const  Query = require('./queries')
const  Mutation = require('./mutations')

require('dotenv').config()

const server = new GraphQLServer({ typeDefs: `./schema.graphql`, resolvers: {Query, Mutation} })

server.start(() => console.log('Server is running on localhost:4000'))



