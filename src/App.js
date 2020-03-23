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
            <h1 className="title">Candidate Admin Tool</h1>
            <UserContext.Provider value={{ user, setUser }}>
                <Row justify="center">
                    <Col sm={24} lg={18} >
                        something inside col
                    <UserTable />
                    </Col>
                </Row>
                <Row justify="start" gutter={[0, 16]} >
                    <Col xs={{ span: 6, offset: 2 }} lg={{ span: 2, offset: 3 }} >
                        <DeleteUser />
                    </Col>
                    <Col xs={6} lg={{ span: 2 }} >
                        <AddUser />
                    </Col>
                    <Col xs={24} lg={{ span: 6, offset:11 }} >
                       <span className="data-description">* All the data are mock data</span>
                    </Col>
                </Row>

            </UserContext.Provider>


            <style jsx="true">{`
            .title{
                text-align:center;
            }

            .data-description{
                font-style:italic;
            }
            
            `} </style>

        </div>
    )
}


export default App