const fetch = require("node-fetch");


const Mutation = {
    createTask: (parent, args, ctx, info) => {
        
        

        const body = args
   
    return fetch(`https://next.focuster.com/api/v1/addAction?api_key=${process.env.FOCUSTER_API}`, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => 'Done').catch(error => error)

    }
           
}

module.exports = Mutation
