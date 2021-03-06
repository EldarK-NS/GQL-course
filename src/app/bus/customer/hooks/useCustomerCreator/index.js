import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'

import { useForm } from '../useForm/index';

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql')

export const useCustomerCreator = () => {
    const [_save, { data }] = useMutation(mutationCreateAccount)
    const { form, handleChange } = useForm({
        name: '',
        username: '',
        password: ''

    })

    const save = () => {
        _save({
            variables: {
                account: form
            }
        })
    }

    return {
        handleChange,
        save,
        createdAccount: data && data.createAccount
    }

}