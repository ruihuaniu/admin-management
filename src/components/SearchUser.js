import React, { useContext } from 'react'
import { Input, Button } from 'antd'
import cloneDeep from 'lodash/cloneDeep';
import { UserContext } from './UserContext'
import data from '../data/sample-example'


function SearchUser() {



    const { users, usersData } = useContext(UserContext)
    const [user, setUser] = users
    const [userData, setUserData] = usersData  //used for search feature

    const { Search } = Input
    // const userCopy = JSON.parse(JSON.stringify(user))

    const handleSearch = (value) => {
        console.log("value is:", value);
        console.log("User is: ",user);
        
        const searchResult = userData.filter((item) => item.real_name.toLowerCase().includes(value.toLowerCase()))
        console.log("UserData is: ",userData);
        console.log("searchResult is: ", searchResult);
        setUser(searchResult)
    }

    return (
        <div>
            <Search
                placeholder="search name here..."
                //onSearch={(value)=>{handleSearch(value)}}
                onChange={(e) => { handleSearch(e.target.value) }}
                enterButton="Search"
                size="large"
            ></Search>

        </div>
    )
}

export default SearchUser

