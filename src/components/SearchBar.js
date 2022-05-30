import React from 'react'
import { Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import '../frontend.scss'

const { Text } = Typography;
const { Search } = Input;

export default function SearchBar() {

    const onSearch = (value) => console.log(value);

    const suffix = (
        <SearchOutlined 
          style={{
            fontSize: 16,
            color: 'red',
          }}
        />
      );

  return (
    <div className='search-bar'>
        <div style={{display: 'flex'}}>
            <p style={{margin:10, fontWeight: 500}}>Education</p>
            <p style={{margin:10, fontWeight: 500}}>Education</p>
            <p style={{margin:10, fontWeight: 500}}>Education</p>
        </div>
        <div style={{display: 'flex'}}>
            <span style={{margin: '15px 0px 10px 0px', fontWeight: 700, width: 90}}><p>Search</p></span>
            <Input placeholder='Enter location' suffix={suffix} size="large" style={{margin: 10, borderColor: 'black', borderRadius: 8}}  />
        </div>
    </div>
  )
}
