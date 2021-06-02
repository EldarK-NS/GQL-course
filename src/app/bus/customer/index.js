import React from 'react'
import { useCustomerCreator } from './hooks/useCustomerCreator/index';

export const Customer = () => {
    const { handleChange, save, createdAccount } = useCustomerCreator()

    const customerJSX = createdAccount && (
        <>
            <p>We created account:</p>
            <div>
                <div>Name:{createdAccount.name}</div>
                <div>UserName:{createdAccount.username}</div>
            </div>
        </>

    )
    return (
        <>
            <div>
                <h1>Registartion</h1>
                <input type="text" placeholder='name' name='name' onChange={handleChange} />
                <input type="text" placeholder='userName' name='username' onChange={handleChange} />
                <input type="password" placeholder='password' name='password' onChange={handleChange} />
                <button type='submit' onClick={save}>SAVE</button>
            </div>
            {customerJSX}
        </>
    )
}
