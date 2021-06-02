import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'

const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
    return useQuery(queryAvailablePets)
}
//усли есть проблемы с подписками то можно использовать в return useQuery(queryAvailablePets, { pollInterval: 500 }), кот через каждые 500 мил сек будет обнавлять данные