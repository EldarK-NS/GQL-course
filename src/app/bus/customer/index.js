import React from 'react'
import { useCustomer } from './hooks/useCustomer/index';

export const Customer = () => {
    const { handleChange, save, createdAccount } = useCustomer()

    const customerJSX = createdAccount && (
        <>
            <p>We created account:</p>
            <p>
                <span>Name:{createdAccount.name}</span>
                <span>UserName:{createdAccount.username}</span>
                <span>Created At:{createdAccount.dateCreated}</span>
            </p>
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
