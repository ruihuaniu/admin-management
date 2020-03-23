import React, { useState, useContext } from 'react'
import { Button, Modal, Form, Row, Col, Input,InputNumber, DatePicker, message } from 'antd'
import {UserContext} from './UserContext'

export default function AddUser() {

    const [visible, setVisible] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [language, setLanguage] = useState('')
    const [years, setYears] = useState(0)
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
        form
        .validateFields()   //much better if combined with customized validateMessages function
        .then(values =>{
            form.resetFields()
            onCreate(values)
            setIsLoading(true)
            setTimeout(()=>{
                setVisible(false)
                setIsLoading(false)
                message.success("New user has been added")
            },1500)
        })
        .catch(info=>{
            console.log('Validate failed', info);
            
        })
        
        // form.submit();
       

    }

    const onCreate =(values)=>{
        const formatValues = {
            ...values,
            'dob': values['dob'].format('YYYY-MM-DD')
        }
        console.log(values);
        
        console.log(formatValues);
        
        setUser([...user,formatValues])
        console.log(user);
    }

    const handleSubmit =(values)=>{
        //method 1: work well, but a little complex compared with method 2
        // const newData = [...user]
        // newData.push({"real_name":name,"dob":birthday,"favourite_language":language, "years_as_sw_dev":years})
        // setUser(newData)

        //method 2
        setUser([...user,values])
        console.log(user);
        form.resetFields()

        // console.log(values);
        // console.log(form.getFieldValue())       
    }

    return (
        <div>
            {/* <Row justify="left" gutter={[0,16]}>
                <Col  sm={{span:12, offset:2}} lg={{span:18, offset:4}} > */}
                    <Button type="primary" onClick={() => setVisible(true)}>Add User </Button>
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
                    // onFinish = {handleSubmit}
                    
                    >
                        <Form.Item name="real_name" label="Name" rules={[{required:true, message: 'Please input the name'}]} >
                            <Input value ={name} onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Item>
                        <Form.Item name="dob" label="Birthday" rules={[{required:true, message: 'Please input the date of birthday'}]}>
                            <DatePicker value ={birthday} onChange={(e)=>{console.log(e);
                            }}/>
                        </Form.Item>
                        <Form.Item name="favourite_language" label="Favourite language" rules={[{required:true}]}>
                            <Input value ={language} onChange={(e)=>{setLanguage(e.target.value)}}/>
                        </Form.Item>
                        <Form.Item name="years_as_sw_dev" label="Years as Developer" rules={[{required:true}]}>
                            <InputNumber value ={years} onChange={(e)=>{console.log(e);
                            }}/>
                        </Form.Item>
                        {/* <Form.Item >
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item> */}

                    </Form>
                    </Modal>

                {/* </Col>
            </Row> */}
        </div>
    )
}
