import React, { useContext } from 'react'
import { Table, Modal, Button, Popconfirm, message } from 'antd'
import 'antd/dist/antd.css'
import UserContext, { useUserContext } from './UserContext'
import EditUser from './EditUser'

function UserTable() {
    const { users, usersData, selectedRow } = useUserContext() //useContext(UserContext)
    const [user, setUser] = users
    const [, setUserData] = usersData  //used for search feature
    const [selectedRowKeys, setSelectedRowKeys] = selectedRow

    // const { Panel } = Collapse;
    // const [visible, setVisible] = useState(false);
    // const [isSelected, setIsSelected] = useState(false);
    // const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    // const selectedCandidates = [];
    // console.log(user);


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
            className: window.innerWidth > 780 ? 'show-column' : 'hide-column',
            // defaultSortOrder: 'ascend',
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
            className: window.innerWidth > 780 ? 'show-column' : 'hide-column',
            render: dob => {
                const dobArray = dob.substr(0, 10).split('-');
                [dobArray[0], dobArray[2]] = [dobArray[2], dobArray[0]];
                dob = dobArray.join('-')

                return (
                    <p>{dob}</p>
                )
            },
            sorter: (a, b) => { return a.dob.localeCompare(b.dob) }
        },
        {
            title: 'Australian Citizen',
            dataIndex: 'australian_citizen',
            key: 'australian_citizen',
            align: 'center',
            className: window.innerWidth > 780 ? 'show-column' : 'hide-column',
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
            className: window.innerWidth > 780 ? 'show-column' : 'hide-column',
            render: (resume, item) => {

                return (
                    <div>

                        <Button onClick={() => {
                            console.log("resume is:", item);
                            // console.log("index is:", index);
                            Modal.confirm({
                                title: 'Resume',
                                content: atob(resume),
                                width: 1000,
                                //  cancelText:'', 
                                maskClosable: true,
                                cancelButtonProps: { style: { display: 'none' } }  //hide the cancel button
                            })
                        }}>Open Resume</Button>

                        {/* Issue needs to be fixed below, all the modals will become visbile after clicking*/}
                        {/* <Button onClick={() => { setVisible(true); console.log("key is: ", item.id); }}>Open Resume</Button>

                        <Modal
                            title="Resume"
                            visible={visible}
                            onOk={() => setVisible(false)}
                            onCancel={() => setVisible(false)}
                            maskClosable={true}
                            key={item.id}
                        >
                            {atob(resume)}
                        </Modal> */}


                    </div>
                )

            }

        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            align: 'center',
            className: window.innerWidth > 780 ? 'show-column' : 'hide-column',
            render: (operation, record) => {

                return (
                    <div>
                        <EditUser index={user.indexOf(record)} />
                    </div>
                )
            }
        },
        {
            title: 'Delete',
            dataIndex: 'delete',
            key: 'delete',
            align: 'center',
            className: window.innerWidth > 780 ? 'show-column' : 'hide-column',
            render: (operation, record) => {

                return (
                    <div>
                        <Popconfirm
                            title="Are you sure to delete?"
                            onConfirm={() => {
                                const index = user.indexOf(record)
                                console.log("item is:", index);
                                const newUserList = [...user]
                                newUserList.splice(index, 1)
                                setUser(newUserList)
                                setUserData(newUserList)
                                console.log("rowkeys,", selectedRowKeys);
                                setSelectedRowKeys([])
                                // if (selectedRowKeys.includes(index)) {
                                //     selectedRowKeys.splice(selectedRowKeys.indexOf(index), 1)
                                //     setSelectedRowKeys([...selectedRowKeys])
                                //     //console.log("SelectedRowKeys includes it! ", record);

                                // }
                                // console.log("after rowkeys,", selectedRowKeys);
                                message.success("The item has been deleted", 1.5)
                            }}
                            onCancel={() => { message.warn("Cancelled", 1.5) }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger >Delete</Button>
                        </Popconfirm>
                    </div>
                )
            }
        }


    ]

    //Used for candidates selection checkbox
    const rowSelection = {
        selectedRowKeys,
        onChange: selectedRowKeys => {
            console.log("selectedRowKeys changed: ", selectedRowKeys);
            setSelectedRowKeys(selectedRowKeys);

        }
    };
    //  const isSelected = selectedRowKeys.length ;


    return (
        <div className="userTable-container">


            <Table
                columns={columns}
                expandedRowRender={record => <p>{record.description}</p>}
                dataSource={user}
                rowSelection={rowSelection}
                // rowKey='id'
                rowKey={record => user.indexOf(record)} //use the index of the user as the key
                pagination={{ pageSize: 10 }}

            />


            {/* <Row justify="left" gutter={[0,16]} >
            <Col sm={{span:12, offset:2}} lg={{span:18, offset:4}} > */}
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
            {/* </Col>
            </Row> */}

        </div >
    )
}


export default UserTable