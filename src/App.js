import React, { useState } from 'react'
import {UserContext} from './components/UserContext'
import data from './data/sample-example'

import UserTable from './components/UserTable'
import AddUser from './components/AddUser'

const App = () => {

    const[user,setUser]= useState(data)
    console.log(user);
    

    return (
        <div>
            <UserContext.Provider value={{user, setUser}}>
                <UserTable />
                <AddUser />
            </UserContext.Provider>

        </div>
    )
}


export default App