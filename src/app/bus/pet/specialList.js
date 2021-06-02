import React from 'react'
import { useQueryAllAvailablePets } from './hooks/useAllAvailablePets/index';

export const SpecialList = () => {
    const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets()

    const loaderJSX = loading && (
        <p>"loading ..."</p>
    )
    const errorJSX = error && (
        <p>We ahve a problem: {error.message}</p>
    )

    const petsJSX = pets && pets.map(({ id, name, weight }) => (
        <p key={id}>
            <span>Name:{name}</span>
            <span>Weight:{weight}</span>
        </p>
    ))

    return (
        <div>
            <button onClick={getAllAvailablePets}>Download</button>
            {loaderJSX}
            {errorJSX}
            {petsJSX}
        </div>
    )
}
