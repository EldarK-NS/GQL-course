
import { useState } from 'react';
import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'

const mutationChekIn = loader('./gql/mutationCheckIn.graphql')


export const useCheckin = () => {
    const [_checkIn, { data, errors }] = useMutation(mutationChekIn)
    const [error, setError] = useState(false)

    const checkIn = (id) => {
        (async () => {
            try {
                await _checkIn({
                    variables: {
                        id
                    }
                })
            } catch (error) {
                setError(error.message);
            }
        })()
    };




    const pet = data && data.checkIn.pet

    return {
        checkIn,
        pet,
        errors,
        error
    }
}