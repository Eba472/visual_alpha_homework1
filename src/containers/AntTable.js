import React from 'react'
import { GET_COUNTRIES } from '../graphql/get-countries'
import { useQuery } from '@apollo/react-hooks'
import { Table} from 'antd'
import 'antd/dist/antd.css'

export function AntTable() {
    const { loading, error, data } = useQuery(GET_COUNTRIES)
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`
    const columns = [
        {
            title: 'Flags',
            dataIndex: 'flag',
            key: 'flag',
            width: 50,
            render: (text, record) => (
                record.flag.emoji
            ),
        },
        {
            title: 'Country',
            dataIndex: 'name',
            key: 'name',
            width: 250,
        },
        {
            title: 'Population',
            key: 'population',
            dataIndex: 'population',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.population - b.population,
            width: 150,
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
            filterMultiple: false,
            width: 150,
            sorter: (a, b) => a.area - b.area,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Region',
            key: 'subregion.name',
            dataIndex: 'subregion._id',
            render: (text, record) => (
                record.subregion.name ? record.subregion.name : "No region"
            ),
                
            filters: data.Subregion && data.Subregion.map(
                subregion => ({
                    text: subregion.name,
                    value: subregion.name,
                })
            ),
            filterMultiple: true,
            onFilter: (value, record) => { 
                if (record.subregion.name){
                    return  record.subregion.name === value
                }
            },
        },
        
    ]


    return (
        <div className="emoji_div">
            <Table columns={columns} dataSource={data.Country} />
        </div>
    )
}
