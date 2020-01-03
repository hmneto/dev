const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLSchema
} = require('graphql')




nomesTab = {
    nome: 'honorio'
}

const table = new GraphQLObjectType({
    name: 'tabela',
    fields: {
        nome: { type: GraphQLString }
    }
})


const customerType = new GraphQLObjectType({
    name: 'customer',
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})


// root query

/** 
const rootQuery = new GraphQLObjectType({

    name: 'rootQueryType',
    fields: {
        customer: {
            type: customerType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                console.log(args)
                for (let i = 0; customers.length; i++) {
                    if (customers[i].id == args.id) {
                        return customers[i]
                    }
                }
            }
        },
        custumers:{
            type: new GraphQLList(customerType),
            resolve(){  
                return customers
            }
        },
        tabela: {
            type: table,
            resolve(){
                return nomesTab
            }
        }
    }
})
*/

const rootQuery = new GraphQLObjectType({

    name: 'rootQueryType',
    fields: {
        customer: {
            type: customerType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return axios.get('http://localhost:3000/customers/' + args.id)
                    .then(res => res.data)
            }
        },
        customers: {
            type: new GraphQLList(customerType),
            resolve() {
                return axios.get('http://localhost:3000/customers')
                    .then(res => res.data)
            }
        },
        tabela: {
            type: table,
            resolve() {
                return nomesTab
            }
        }
    }
})
let mutations= {
    type: new GraphQLNonNull(customerType),
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLString) },
    },
    addUser(parentValue, args) {
        return axios.post('http://localhost:3000/customers', {
            name: args.name,
            email: args.email,
            age: args.age
        }).then(res => res.data)
    }
}
module.exports = new GraphQLSchema({
    query: rootQuery,
    mutations
})