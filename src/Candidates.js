import React from 'react'
import data from './data/sample-example'
import { Table, Collapse,Modal } from 'antd'
import 'antd/dist/antd.css'

function Candidates() {

    const { Panel } = Collapse;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'photo',
            render: photo => (
                <img alt='Profile' src={photo} />
            )
        },
        {
            title: 'Name',
            dataIndex: 'real_name',
            key: 'real_name',
            sorter: (a, b) => { return a.real_name.localeCompare(b.real_name) },
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: description => (
                <Collapse><Panel header="Description">{description}</Panel></Collapse>
                
            )
        },
        {
            title: 'Data of Birth',
            dataIndex: 'dob',
            key: 'dob',
            render: dob => (
                <p>{dob.substr(0, 10)}</p>
            ), sorter: (a, b) => { return a.dob.localeCompare(b.dob) }
        },
        {
            title: 'Favourite Language',
            dataIndex: 'favourite_language',
            key: 'favourite_language',
            sorter: (a, b) => { return a.favourite_language.localeCompare(b.favourite_language) },
        },
        {
            title: 'Years as Developer',
            dataIndex: 'years_as_sw_dev',
            key: 'years_as_sw_dev',
            sorter: (a, b) => a.years_as_sw_dev - b.years_as_sw_dev,
        },
        {title:'Resume',
        dataIndex: 'resume_base64', 
        key: 'resume_base64',
        render: resume=>(
            <Modal>{atob(resume)}</Modal>
        )

        }
    ]


    return (
        <Table
            columns={columns}
            //expandedRowKeys={data}
            expandRowRender={record => <p>{record}</p>}
            dataSource={data}
            rowKey="id"
        />

        // data.map((item,key)=>{
        //     return(
        //         <div>

        //             <li>{atob(item.resume_base64)}</li>
        //         </div>
        //     )
        // })
    )



}


export default Candidates