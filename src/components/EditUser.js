import React, { useState, useContext } from 'react'
import { Button, Modal, Form, Select, Upload,  Input, InputNumber, DatePicker, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import UserContext, { useUserContext } from './UserContext'
import moment from 'moment';

function EditUser(props) {

    const [visible, setVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [checkEdit, setCheckEdit] = useState(true)
    const { users} = useUserContext() //useContext(UserContext)
    const [user, setUser] = users
    // const [selectedRowKeys, setSelectedRowKeys] = selectedRow
    const { Option } = Select
    const index = props.index

    
    const [form] = Form.useForm()
    const formItemLayout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 14 },
    }

    const validateMessages = {
        required: 'This field is required!',
    }

    const handleOk = () => {
        form
            .validateFields()   //much better if combined with customized validateMessages function
            .then(values => {
                console.log("form.getFieldsValue() within onOk ",form.getFieldsValue());
                form.resetFields()
                onCreate(values)
                setIsLoading(true)
                setTimeout(() => {
                    setVisible(false)
                    setIsLoading(false)
                    message.success("User info has been updated")
                }, 800)
            })
            .catch(info => {
                console.log('Validate failed', info);

            })

        // form.submit()
    }

    const handleCancel = () => {
        setVisible(false);
        // form.resetFields()   //use or not? depends
        // message.error("Cacelled")
    }

    const onCreate = (values) => {

        console.log("form.getFieldsValue() within onCreate ",form.getFieldsValue());
        
        const formatValues = {
            ...values,
            'dob': values['dob'].format('YYYY-MM-DD'),
            'favourite_language': values['favourite_language'].join(),
             'id': user[index].id,
             'description': user[index].description,
            // //'resume_base64': values['resume_base64'][0]
            'resume_base64': user[index].resume_base64
        }
        console.log("Value in EditUser.js is: ", values);

        console.log("formatValue in EditUser.js is: ", formatValues);
        const newUserList = [...user]
        newUserList.splice(index,1,formatValues)

        setUser(newUserList)
        
        
    }

    const normFile = (e) => {
        console.log("file upload info: ", e);
        if (Array.isArray(e)) {
           
            return e

        }
        
        return e & e.fileList


    }

    // const handleSubmit = (values) => {
    //     //method 1: work well, but a little complex compared with method 2
    //     // const newData = [...user]
    //     // newData.push({"real_name":name,"dob":birthday,"favourite_language":language, "years_as_sw_dev":years})
    //     // setUser(newData)

    //     //method 2
    //     setUser([...user, values])
    //     console.log(user);
    //     form.resetFields()

    //     // console.log(values);
    //     // console.log(form.getFieldValue())       
    // }
    

    const handleEditUser =()=>{
        setVisible(true)
        const editData = user[index]
        console.log(user[index]);
        
        form.setFieldsValue({
            'id': editData.id,
            'real_name': editData.real_name,
            'dob': moment(editData.dob),
            'favourite_language':editData.favourite_language.split(','),
            'years_as_sw_dev': editData.years_as_sw_dev
        })
    }

    return (
        <div className="editUser-container">

            <Button type="dashed" onClick={handleEditUser}>Edit</Button>
            <Modal
                title={<h3>Edit User</h3>}
                visible={visible}
                onOk={handleOk}
                confirmLoading={isLoading}
                onCancel={handleCancel}
                maskClosable={false}
                forceRender={true}
                okButtonProps={{ disabled: checkEdit }}
            ><Form
                {...formItemLayout}
                layout="horizontal"
                form={form}
                validateMessages={validateMessages}
                onValuesChange = {()=>{setCheckEdit(false)}}
            // onFinish = {handleSubmit}

            >
                    <Form.Item name="real_name" label="Name" rules={[{ required: true, message: 'Please input the name' }]} >
                        <Input  />
                    </Form.Item>
                    <Form.Item name="dob" label="Birthday" rules={[{ required: true, message: 'Please input the date of birthday' }]}>
                        <DatePicker format='MMM Do YYYY' />
                    </Form.Item>
                    <Form.Item name="favourite_language" label="Favourite language" rules={[{ required: true }]}>
                        {/* <Input value ={language} onChange={(e)=>{setLanguage(e.target.value)}}/> */}
                        <Select
                            mode='multiple'
                        >
                            <Option value="JavaScript" >JavaScript</Option>
                            <Option value="Node.js" >Node.js</Option>
                            <Option value="Python" >Python</Option>
                            <Option value="Java" >Java</Option>
                            <Option value="PHP" >PHP</Option>
                            <Option value="C#" >C#</Option>
                            <Option value="Other" >Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="years_as_sw_dev" label="Years as Developer" rules={[{ required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="resume_base64"
                        label="Resume"
                        valuePropName="file"  //don't know why fileList not working here
                        getValueFromEvent={normFile}
                        // rules={[{ required: true }]}
                    >
                        <Upload 
                        name="resume_base64"
                        action="http://www.mocky.io/v2/5e79e1473000006f009303b8"
                        >
                            <Button>
                                <UploadOutlined /> Click to upload
                            </Button>
                        </Upload>

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


export default EditUser