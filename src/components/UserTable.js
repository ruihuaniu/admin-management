import React, { useState, useContext } from 'react'
// import data from '../data/sample-example'
import { Table, Collapse, Modal, Button, Row, Col,Tooltip } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css'
import { UserContext } from './UserContext'

function Candidates() {
    const {user, setUser}  = useContext(UserContext)

    const { Panel } = Collapse;
    const [visible, setVisible] = useState(false);
    // const [isSelected, setIsSelected] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const selectedCandidates = [];
    console.log(user);
    

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.id - b.id,
        },
        // {
        //     title: 'Photo',
        //     dataIndex: 'photo',
        //     key: 'photo',
        //     width: 50,
        //     // render: photo => (
        //     //     <img alt='Profile' src={photo} />
        //     // )
        // },
        {
            title: 'Name',
            dataIndex: 'real_name',
            key: 'real_name',
            align: 'center',
            sorter: (a, b) => { return a.real_name.localeCompare(b.real_name) },
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        //     render: description => (
        //         <Collapse><Panel header={description.split(" ").slice(0,3).join(" ")+"..."}>{description}</Panel></Collapse>

        //     )
        // },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
            key: 'dob',
            align: 'center',
            render: dob => (
                <p>{dob.substr(0, 10)}</p>
            ),
            sorter: (a, b) => { return a.dob.localeCompare(b.dob) }
        },
        {
            title: 'Australian Citizen',
            dataIndex: 'australian_citizen',
            key: 'australian_citizen',
            align: 'center',
            render: citizen => (
                <p>{citizen ? 'YES' : (citizen === false ? 'NO' : '')}</p>

            ),
            // sorter: (a, b) => { return (a.australian_citizen && b.australian_citizen)?a.australian_citizen.localeCompare(b.australian_citizen):(a-b) },

        },
        {
            title: 'Favourite Language',
            dataIndex: 'favourite_language',
            key: 'favourite_language',
            align: 'center',
            sorter: (a, b) => { return a.favourite_language.localeCompare(b.favourite_language) },
        },
        {
            title: 'Years as Developer',
            dataIndex: 'years_as_sw_dev',
            key: 'years_as_sw_dev',
            align: 'center',
            sorter: (a, b) => a.years_as_sw_dev - b.years_as_sw_dev,
        },
        {
            title: 'Resume',
            dataIndex: 'resume_base64',
            key: 'resume_base64',
            align: 'center',
            render: (resume, index) => {

                return (
                    <div>

                        <Button onClick={() => {
                            Modal.success({
                                title: 'Resume', content: atob(resume),
                                maskClosable() { }
                            })
                        }}>Open Resume</Button>

                        {/* Issue needs to be fixed below, all the modals will become visbile after clicking*/}
                        {/* <Button  onClick={()=>{setVisible(true);console.log(visible);}}>Open Resume</Button>
                    <p>visible below button: {visible}</p>
                            <Modal 
                        title="Resume" 
                        visible={visible}
                        onOk={()=>setVisible(false)}
                        onCancel ={()=>setVisible(false)}
                        maskClosable={true}
                        key={index}
                        
                        >
                           {atob(resume)}
                        </Modal>             
                    */}
                    </div>
                )

            }

        }
    ]

    //Used for candidates selection checkbox
    const rowSelection = {
        onChange: selectedRowKeys => {
            console.log("selectedRowKeys changed: ", selectedRowKeys);
            setSelectedRowKeys(selectedRowKeys);
            
        }
    };
     const isSelected = selectedRowKeys.length ;


    return (
        <div>
            <Row justify="center"  >
                <Col sm={22} lg={18}>
                    <Table
                        columns={columns}
                        expandedRowRender={record => <p>{record.description}</p>}
                        dataSource={user}
                        rowSelection={rowSelection}
                        rowKey='id'
                        pagination={{ pageSize: 10 }}

                    />
                </Col>    
            </Row>

            <Row justify="left" gutter={[0,16]} >
            <Col sm={{span:12, offset:2}} lg={{span:18, offset:4}} >
            {/* <Tooltip 
            placement="top" 
            title="Select above first"   
            // visible={ isSelected?false:true}  
            trigger="hover"
            >
                <Button
                    type="primary"
                    onClick={() => {
                        selectedRowKeys.map((item, index) => selectedCandidates[index] = user.find((candidate) => candidate.id === item));
                        console.log(JSON.stringify(selectedCandidates))

                        //post to server after clicking submit button, url below should be replaced with real URL
                        // axios.post('url', JSON.stringify(selectedCandidates))
                        //     .then(res => console.log(res))
                        //     .catch(err => console.error(err))
                    }}
                   
                    disabled={!isSelected}
                    
                >Submit
                </Button>
                </Tooltip>
                <span style={{ marginLeft: 8 }}>
                    {isSelected ? `Selected ${selectedRowKeys.length} Candidates` : ""}
                </span> */}
            </Col>
            </Row>

        </div >       
    )
}


export default Candidates