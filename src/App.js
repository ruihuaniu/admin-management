import React, { useState } from 'react'
import { Col, Row } from 'antd'
import {GithubOutlined } from '@ant-design/icons'
import UserContext from './components/UserContext'
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
            <h1 className="title">Admin Management Tool <a href="https://github.com/BartonNIU/candidate-admin"  className="powered-info">(Powered by React.js <GithubOutlined />)</a></h1> 
            <UserContext.Provider value={{ users:[user, setUser], usersData: [userData, setUserData], selectedRow:[selectedRowKeys, setSelectedRowKeys] }}>
                <Row justify="center" gutter={[0,16]}>
                    <Col xs={{span: 22}} md={18} lg={10} >     
                    <SearchUser />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col sm={22} lg={18} >     
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
            
            
            `} </style>

        </div>
    )
}


export default App