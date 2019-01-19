const fetch = require("node-fetch");


const Query = {


// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// }

    tasks(parent, args, ctx, info) {
        try {
           
        
            return fetch(`https://next.focuster.com/api/v1/actions.json?api_key=${process.env.FOCUSTER_API}`).then(res => res.json());

        } catch (error) {
            console.log(error);
          }
    }
          
  
}

module.exports = Query