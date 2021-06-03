import React from 'react'
import { useQueryUsers } from './hooks/useQueryUsers/index';

export const Users = () => {

    const { loading, error, users } = useQueryUsers()

    if (loading) {
        return (<p>"loading ..."</p>)
    }
    if (error) {
        return (
            <p>We ahve a problem: {error.message}</p>
        )
    }

    const usersJSX = users.map(({ name, email, password }) => (
        <p key={email}>
            <span>Name:{name}</span>
            <span>Email:{email}</span>
            <span>Password:{password}</span>
        </p>
    ))
    return (
        <div>
            <h1>Users: </h1>
            {usersJSX}
        </div>
    )
}
