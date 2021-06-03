import React from 'react';
// import { Counter } from './counter';
// import { List } from './list'
// import { SpecialList } from './specialList';
// import { Customers } from './customers';
// import { Profile } from './profile';
import { CheckinPet } from './checkinPet';
import { PetReturn } from './petReturn';

export const Pet = () => {
    return (
        <div>
             <h1>----------------------------------------------</h1>
            <h1>PET</h1>
            <CheckinPet />
            <h1>----------------------------------------------</h1>
            <PetReturn />
            {/* <Profile />
            <Counter />
            <List />
            <SpecialList /> */}
            {/* <Customers/> * */}
        </div>
    )
}
