import React from 'react'
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets/index';

export const Counter = () => {
    const { loading, error, data } = useQueryAvailablePets()
    if (loading) {
        return (<p>"loading ..."</p>)
    }
    if (error) {
        return (
            <p>We ahve a problem: {error.message}</p>
        )
    }

    return (
        <h1>Available pets: {data.availablePets}</h1>
    )
}

