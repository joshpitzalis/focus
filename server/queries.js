const fetch = require("node-fetch");


const Query = {
    tasks: (parent, args, ctx, info) =>
            fetch(`https://next.focuster.com/api/v1/actions.json?api_key=${process.env.FOCUSTER_API}`)
            .then(res => res.json())
            .catch(error => error)
}

module.exports = Query

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// }