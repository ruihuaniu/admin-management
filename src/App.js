import React, { useState } from 'react'
import { Col, Row } from 'antd'
import { UserContext } from './components/UserContext'
import data from './data/sample-example'

import UserTable from './components/UserTable'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'

const App = () => {

    const [user, setUser] = useState(data)
    console.log(user);


    return (
        <div>
            <h1 className="title">Candidate Admin Tools</h1>
            <UserContext.Provider value={{ user, setUser }}>
                <Row justify="center">
                    <Col sm={24} lg={18} >
                        something inside col 
                    <UserTable />
                    </Col>
                </Row>
                <Row justify="start" gutter={[0,16]} >
                <Col sm={12} lg={{span:2, offset:3}} >  
                        <DeleteUser />
                </Col>
                <Col sm={12} lg={{span:2}} >    
                        <AddUser />
                    </Col>
                </Row>

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