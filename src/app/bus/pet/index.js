import React from 'react';
import { Counter } from './counter';
import { List } from './list'
import { SpecialList } from './specialList';
// import { Customers } from './customers';
import { Profile } from './profile';

export const Pet = () => {
    return (
        <div>
            <h1>PET</h1>
            <Profile />
            <Counter />
            <List />
             <SpecialList />
            {/* <Customers/> * */}
        </div>
    )
}
