import React from 'react';
import { Counter } from './counter';
import { List } from './list'
import { SpecialList } from './specialList';
import { Customers } from './customers';

export const Pet = () => {
    return (
        <div>
            <h1>PET</h1>
            <Counter />
            <List />
            <SpecialList />
            <Customers/>
        </div>
    )
}
