import React from 'react'
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './init/modern';

// import {Pet }from './bus/pet'
// import { Customer } from './bus/customer/index';
// import { Login } from './bus/customer/login';
import { User } from './bus/user/index';


export default function App() {
    return (
        <ApolloProvider client={client}>
            <User />
            {/* <Customer />
            <Login />
            <Pet/> */}
        </ApolloProvider>
    )
}
