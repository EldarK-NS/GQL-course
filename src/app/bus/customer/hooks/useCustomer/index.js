import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql')

export const useCustomer = () => {
    const [addUser, { loading, error, data }] = useMutation(mutationCreateAccount)

    const [values, setValues] = useState({
        account: {
            name: '',
            username: '',
            password: ''
        }
    })

    const handleChange = (event) => {
        event.persist();
        setValues((prevValues) => ({
            account: {
                ...prevValues.account,
                [event.target.name]: event.target.value
            }
        }))
    }

    const save = () => {
        const { account } = values
        addUser({
            variables: {
                account
            }
        })
    }

    return {
        values,
        handleChange,
        save,
        createdAccount: data && data.createAccount
    }

}