
import { useSubscription } from '@apollo/client'
import { loader } from 'graphql.macro';

const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql')

export const usePetReturned = () => {

    const { error, data } = useSubscription(subscriptionPetReturned)

    const pet = data ? data.petReturned.pet : null

    return {error, pet }

}