import React from 'react'
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './init/client';

// import {Pet }from './bus/pet'
import { Customer } from './bus/customer/index';
import { Login } from './bus/customer/login';

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Customer />
            {/* <Pet/> */}
            <Login />
        </ApolloProvider>
    )
}
