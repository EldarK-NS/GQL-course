import React from 'react'
import { usePetReturned } from './hooks/usePetReturned/index';

export const PetReturn = () => {

    const {pet, error, }=usePetReturned()
    console.log(pet)

    const petJSX = pet && (
        <>
            <div>Id: {pet.id}</div>
            <div>Pet Name: {pet.name}</div>
        </>
    )

    const errorsJSX = error && (
        <p>We have a problem :{error.message}</p>
    )

    return (
        <div>
            <h1>Pet Returned</h1>
            {petJSX}
            {errorsJSX}
        </div>
    )
}
