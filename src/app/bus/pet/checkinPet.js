import React from 'react'
import { useCheckin } from './hooks/useCheckin/index';

export const CheckinPet = () => {

    const { checkIn, pet, errors, error } = useCheckin()

    const petJSX = pet && (
        <>
            <div>Id: {pet.id}</div>
            <div>Pet Name: {pet.name}</div>
        </>
    )

    const errorsJSX = errors && (
        <p>We have a problem :{errors.message}</p>
    )
    const errorJSX = error && (
        <p>We have another problem :{error}</p>
    )

    return (
        <div>
            <h1>Check In</h1>
            <button onClick={() => checkIn("C-5")}>ChekIn</button>
            {petJSX}
            {errorsJSX}
            {errorJSX}
        </div>
    )
}
