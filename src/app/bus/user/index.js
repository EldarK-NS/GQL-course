import React from 'react'

import { Registration } from './registration';
import { Users } from './users';
import { Login } from './../customer/login';

export const User = () => {
    return (
        <div>
            <Registration />
            <p>------------------------------------------</p>
            <Login/>
            <p>------------------------------------------</p>
            <Users />
        </div>
    )
}
