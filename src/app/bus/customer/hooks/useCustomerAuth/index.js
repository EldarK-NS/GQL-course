import { useState } from 'react'
import { loader } from 'graphql.macro'
import { useForm } from './../useForm/index';
import { useMutation } from '@apollo/client';

const mutationLogIn = loader('./gql/mutationLogin.graphql')

export const useCustomerAuth = () => {

    const [_logIn, { data }] = useMutation(mutationLogIn)

    const { form, handleChange } = useForm({
        username: '',
        password: ''
    })
    const logIn = () => {
        _logIn({
            variables: form

        })
    }



    return {
        handleChange,
        logIn,
        authorizedCustomer:data&& data.logIn
    }
}