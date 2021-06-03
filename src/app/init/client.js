import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from "@apollo/client/link/context"
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

const root = 'funded-pet-library.moonhighway.com/'

// GraphQL Server
const uri = `https://${root}`

const httpLink = createHttpLink({ uri })




//WS
const wsLink = new WebSocketLink({
    uri: `wss://${root}graphql`,
    options:{
        reconnect: true
    }
})

//Auth
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const wrappedHttpLink = authLink.concat(httpLink)

// WS
const link = split(({ query }) => {
    const definiton = getMainDefinition(query)
    return (
        definiton.kind === "OperationDefinition" &&
        definiton.operation === "subscription"
    )
},
    wsLink,
    wrappedHttpLink
)

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})