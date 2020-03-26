import React, { useState } from 'react'
import { Col, Row } from 'antd'
import { UserContext } from './components/UserContext'
import data from './data/sample-example'

import UserTable from './components/UserTable'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'
import SearchUser from './components/SearchUser'

const App = () => {

    const [user, setUser] = useState(data.slice(0,9)) //only fetch 9 out of 20 users data
    const [userData, setUserData] = useState(data.slice(0,9))  // used for search feature
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // console.log('User in App.js', user);
    // console.log('selectRowKeys in App.js', selectedRowKeys);

    return (
        <div>
            <h1 className="title">Candidate Admin Tool <span className="powered-info">(Powered by React.js)</span></h1> 
            <UserContext.Provider value={{ users:[user, setUser], usersData: [userData, setUserData], selectedRow:[selectedRowKeys, setSelectedRowKeys] }}>
                <Row justify="center" gutter={[0,16]}>
                    <Col sm={24} lg={10} >     
                    <SearchUser />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col sm={24} lg={18} >     
                    <UserTable />
                    </Col>
                </Row>
                <Row justify="start" gutter={[0, 16]} >
                    <Col xs={{ span: 6, offset: 2 }} lg={{ span: 3, offset: 3 }} >
                        <DeleteUser />
                    </Col>
                    <Col xs={6} lg={{ span: 2 }} >
                        <AddUser />
                    </Col>
                    <Col xs={{span: 22, offset:2}} lg={{ span: 5, offset:10 }} >
                       <span className="data-description">* All the data are mock data</span>
                    </Col>
                </Row>
            </UserContext.Provider>


            <style jsx="true">{`
            .title{
                text-align:center;
            }

            .powered-info{
                font-size:1rem;
            }

            .data-description{
                font-style:italic;
            }
            
            `} </style>

        </div>
    )
}


export default App