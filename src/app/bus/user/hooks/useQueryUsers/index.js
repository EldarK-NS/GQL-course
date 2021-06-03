import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'

const queryUsers = loader('./gql/queryUsers.graphql');

export const useQueryUsers = () => {
    const { loading, error, data } = useQuery(queryUsers)
    const users = data ? data.users : null

    return { loading, error, users }

}