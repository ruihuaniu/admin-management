import React, { useState } from 'react'
import {UserContext} from './components/UserContext'
import data from './data/sample-example'

import UserTable from './components/UserTable'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'

const App = () => {

    const[user,setUser]= useState(data)
    console.log(user);
    

    return (
        <div>
           <h1 className = "title">Candidate Admin</h1>
            <UserContext.Provider value={{user, setUser}}>
                <UserTable />
                <DeleteUser/>
                <AddUser />
    
            </UserContext.Provider>


            <style jsx="true">{`
            .title{
                text-align:center;
            }
            
            `} </style>

        </div>
    )
}


export default App