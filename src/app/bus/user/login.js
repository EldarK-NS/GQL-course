import React from 'react'

import { useCustomerAuth } from './hooks/useCustomerAuth/index';

export const Login = () => {
    const { handleChange, logIn, authorizedCustomer } = useCustomerAuth()

    const customerJSX = authorizedCustomer && (
        <>
            <div><p>Authorized Customer{authorizedCustomer.customer.name}</p></div>
            <div><p>Token: {authorizedCustomer.token}</p></div>
        </>
    )
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='userName' name='username' onChange={handleChange} />
            <input type="password" placeholder='password' name='password' onChange={handleChange} />
            <button type='submit' onClick={logIn}>Login</button>
            {customerJSX}
        </div>
    )
}
