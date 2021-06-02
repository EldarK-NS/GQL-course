import React from 'react'
import { useQueryAllCustomers } from './hooks/useQeueryAllCustomers/index';

export const Customers = () => {
    const { loading, error, customers } = useQueryAllCustomers()

    if (loading) {
        return (<p>"loading ..."</p>)
    }
    if (error) {
        return (
            <p>We ahve a problem: {error.message}</p>
        )
    }

    const listCustomers = customers.map(({ username, name, dateCreated }) => (
        <p>
            <span>UserName:{username}</span>
            <span>Name:{name} </span>
            <span>CreatedAt:{dateCreated}</span>
        </p>
    ))

    return (
        <div>
            <h3>Customers</h3>
            {listCustomers}
        </div>
    )
}
