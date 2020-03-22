import React, { useContext } from 'react'
import { Button, Row, Col, Tooltip } from 'antd'
import { UserContext } from './UserContext'

export default function DeleteUser() {

    const { user, setUser } = useContext(UserContext)

    const deleteUser = () => {
        const newUserList = [...user]
        newUserList.pop()
        console.log(newUserList);       
        setUser(newUserList)
       
    }
    return (
        <div>
            <Tooltip
                placement="top"
                title="Select above first"
                // visible={ isSelected?false:true}  
                trigger="hover"
            >
                <Button
                    type="danger"
                    onClick={deleteUser}

                // disabled={!isSelected}

                >
                    Delete
                </Button>
            </Tooltip>
            <span style={{ marginLeft: 8 }}>
                {/* {isSelected ? `Selected ${selectedRowKeys.length} Candidates` : ""} */}
            </span>
        </div>
    )
}

