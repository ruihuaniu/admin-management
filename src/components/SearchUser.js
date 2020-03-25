import React, {useContext} from 'react'
import {Input, Button} from 'antd'
import { UserContext } from './UserContext'


function SearchUser() {

    const { users } = useContext(UserContext)
    const [user, setUser] = users

    const {Search} = Input

    return (
        <div>
            <Search
            placeholder="search here..."
            onSearch={value=>console.log("search vale is : ",value)}
            enterButton="Search"
            
            
            ></Search>

        </div>
    )
}

export default SearchUser

