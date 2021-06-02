import { useLazyQuery } from '@apollo/client'
import { loader } from 'graphql.macro'

const queryAllAvailablePets = loader('./gql/queryAllAvalablePets.graphql');

//!useLazyQuery -помимо основных параметров возвращает запускающую функцию (getAllAvailablePets),
//!которая позволяет запускать запрос при необходимости

export const useQueryAllAvailablePets = () => {
    const [getAllAvailablePets, { loading, error, data }] = useLazyQuery(queryAllAvailablePets)

    return { getAllAvailablePets, loading, error, pets: data && data.allAvailablePets }
}