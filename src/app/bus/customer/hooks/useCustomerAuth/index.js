// import { useState } from 'react'
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
    // const [isAuthorized, setAuthorized] = useState(false)
    const logIn = () => {
        _logIn({
            variables: form

        })
    }

    const authorizedCustomer = data && data.logIn

    const token = authorizedCustomer && authorizedCustomer.token

    if (token) {
        console.log(token)
        localStorage.setItem('token', token)
    }

    return {
        handleChange,
        logIn,
        authorizedCustomer
    }
}