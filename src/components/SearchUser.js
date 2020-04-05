import React, { useContext } from 'react'
import { Input,} from 'antd'
import { useUserContext } from './UserContext'



function SearchUser() {


    const { users, usersData } = useUserContext() //instead of useContext(UserContext)
    const [user, setUser] = users
    const [userData] = usersData  //used for search feature

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
        <div className="searchUser-container">
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

