import React from 'react'
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './init/client';

import {Pet }from './bus/pet'

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Pet />
        </ApolloProvider>
    )
}
