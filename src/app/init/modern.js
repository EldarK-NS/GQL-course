import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { createHttpLink } from 'apollo-link-http'
// import { setContext } from "@apollo/client/link/context"
// import { WebSocketLink } from '@apollo/client/link/ws'
// import { getMainDefinition } from '@apollo/client/utilities'


// GraphQL Server
const uri = `http://localhost:4000/`

const link = createHttpLink({
    uri,
    credentials: 'include'
})


export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})