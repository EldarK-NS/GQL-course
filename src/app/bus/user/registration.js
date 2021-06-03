import React from 'react'
import { useUserCreator } from './hooks/useUserCreator/index';

export const Registration = () => {

    const { handleChange, save, createdUser } = useUserCreator()

    const userJSX = createdUser && (
        <>
            <p>We created account:</p>
            <div>
                <div>Name:{createdUser.name}</div>
                <div>Email:{createdUser.email}</div>
                <div>Password:{createdUser.password}</div>
            </div>
        </>)
    return (
        <div>
            <h1> User</h1>
            <div>
                <h1>Registartion</h1>
                <input type="text" placeholder='name' name='name' onChange={handleChange} />
                <input type="text" placeholder='email' name='email' onChange={handleChange} />
                <input type="password" placeholder='password' name='password' onChange={handleChange} />
                <button type='submit' onClick={save}>SAVE</button>
            </div>
            {userJSX}
        </div>
    )
}
