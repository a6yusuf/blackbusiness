import React from 'react'
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import '../frontend.scss'
import { RightOutlined } from '@ant-design/icons';


const { Paragraph, Text } = Typography;

export default function BusinessCard() {

    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <p style={{fontWeight: 800, fontSize: 20, margin: 5}}>Business Name</p>
        <div style={{margin: 5}}>
            <Paragraph ellipsis={{ rows: 3, expandable: false }}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: 5}}>
            <p style={{fontWeight: 700, fontSize: 20, margin: 10}}>View</p>
            <span>
                <button 
                    type="button" 
                    className='button-wrapper'
                    // onClick={callback}
                >
                    <RightOutlined />
                </button>
            </span>
        </div>
    </div>
  )
}
