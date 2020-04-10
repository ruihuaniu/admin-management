import React, { useContext, useState, } from 'react'
import { Button, Tooltip, Popconfirm, message } from 'antd'
import { useUserContext } from './UserContext'

export default function DeleteUser() {

    const { users, usersData, selectedRow } = useUserContext()  //useContext(UserContext)
    const [user, setUser] = users
    const [, setUserData] = usersData  //used for search feature
    const [selectedRowKeys, setSelectedRowKeys] = selectedRow
    const [isHover, setIsHover] = useState(false)

    const isSelected = selectedRowKeys.length > 0

    const deleteUser = (itemIndexes) => {
        const newUserList = [...user]
        itemIndexes.sort((a, b) => b - a) //descending order, to avoid the influence of index change when removing multiple values from an array
        itemIndexes.forEach((id) => { newUserList.splice(id, 1) })
        console.log(newUserList);
        setUser(newUserList)
        setUserData(newUserList)
        setSelectedRowKeys([])  //deselect the index of users 
        message.success("Selected items are deleted", 2)
    }


    const handleCancel = () => {
        message.error("Cancelled", 1.5)
    }
    return (
        <div className="deleteUser-container">
            <Tooltip
                placement="top"
                title="Select from above first"
                visible={isSelected ? false : isHover ? true : false}
                //trigger="hover"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => { setIsHover(false) }}
            >
                <Popconfirm
                    title={"Are you sure you want to delete these " + selectedRowKeys.length + " users?"}
                    onConfirm={() => deleteUser(selectedRowKeys)}
                    onCancel={handleCancel}
                    okText="Yes"
                    CancelText="No"
                    disabled={!isSelected}

                >
                    <Button type="danger" disabled={!isSelected} >
                        Delete {isSelected ? `${selectedRowKeys.length} items` : ""}
                    </Button>

                </Popconfirm>

            </Tooltip>
            {/* <p style={{ width: '200px' }}>
                {isSelected ? `Selected ${selectedRowKeys.length} Users` : ""}
            </p> */}
        </div>
    )
}

