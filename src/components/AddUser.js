import React, { useState, useContext } from 'react'
import { Button, Modal, Form, Row, Col, Input, message } from 'antd'
import {UserContext} from './UserContext'

export default function AddUser() {

    const [visible, setVisible] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [language, setLanguage] = useState('')
    const [years, setYears] = useState()
    const {user, setUser} = useContext(UserContext)


    const [form] = Form.useForm()
    const formItemLayout = {
        labelCol: {span:7},
        wrapperCol:{span:14},
    }

    const validateMessages={
        required: 'This field is required!',
    }

    const handleOk = () => {
        setIsLoading(true)
        form.submit();
        // handleSubmit();

        console.log(typeof(form.getFieldValue()));
        

        setTimeout(()=>{
            setVisible(false)
            setIsLoading(false)
            message.success("New user has been added")
        },1500)

    }

    const handleSubmit =()=>{
        //method 1: work well, but a little complex compared with method 2
        // const newData = [...user]
        // newData.push({"real_name":name,"dob":birthday,"favourite_language":language, "years_as_sw_dev":years})
        // setUser(newData)

        //method 2
        setUser([...user,form.getFieldValue()])
        console.log(user);
        form.resetFields()
        
    }

    return (
        <div>
            <Row justify="center">
                <Col sm={12} lg={18} offset={1}>
                    <Button onClick={() => setVisible(true)}>Add User </Button>
                    <Modal
                        title={<h3>Add New User</h3>}
                        visible={visible}
                        onOk={handleOk}
                        confirmLoading={isLoading}
                        onCancel={() => {setVisible(false); form.resetFields() }}
                        maskClosable={false}
                    ><Form
                    {...formItemLayout}
                    layout = "horizontal"
                    form = {form}
                    validateMessages={validateMessages}
                    onFinish = {handleSubmit}
                    
                    >
                        <Form.Item name="real_name" label="Name" rules={[{required:true}]} >
                            <Input value ={name} onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Item>
                        <Form.Item name="dob" label="Birthday" rules={[{required:true}]}>
                            <Input value ={birthday} onChange={(e)=>{setBirthday(e.target.value)}}/>
                        </Form.Item>
                        <Form.Item name="favourite_language" label="Favourite language" rules={[{required:true}]}>
                            <Input value ={language} onChange={(e)=>{setLanguage(e.target.value)}}/>
                        </Form.Item>
                        <Form.Item name="years_as_sw_dev" label="Years as Developer" rules={[{required:true}]}>
                            <Input value ={years} onChange={(e)=>{setYears(e.target.value)}}/>
                        </Form.Item>
                        {/* <Form.Item >
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item> */}

                    </Form>
                    </Modal>

                </Col>
            </Row>
        </div>
    )
}
