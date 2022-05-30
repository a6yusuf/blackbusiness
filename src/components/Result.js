import React from 'react'
import BusinessCard from './BusinessCard'
import { Col, Row } from 'antd';
import BusinessMap from './BusinessMap';
import '../frontend.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function Result() {

    const style = {
        card: {
            background: '#fff',
            padding: '5px',
            margin: '5px',
            border: '2px solid black'
        },
        button: {
            backgroundColor: 'black',
            color: 'white',
            textTransform: "uppercase",
            fontWeight: 400,
            fontSize: 12,
            // lineHeight: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 4,
            marginRight: 4,
            marginBottom: 4,
            transition: "all .15s ease",
            height: 40,
            border: 0,
            cursor: 'pointer'
        }
      };

  return (
    <div style={{display: 'flex', flexDirection: 'column', background: '#f2f2f2'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{fontWeight: 800, margin: 5}}>Filters</p>
            <span style={{display: 'flex'}}>
                <p style={{margin:5, marginBottom: 5, marginRight: 10, fontWeight: 500}}>Education</p>
                <p style={{margin:5, marginBottom: 5, marginRight: 10, fontWeight: 500}}>Education</p>
                <p style={{margin:5, marginBottom: 5, marginRight: 10, fontWeight: 500}}>Education</p>
                <p style={{margin:5, marginBottom: 5, marginLeft: 30, fontWeight: 800}}>1234 Businesses found</p>
            </span>
        </div>
        <div className='result-wrapper'>
             <div className='business-wrapper'>
                <Row gutter={{xs: 1, sm: 2, md: 3, lg: 4}}>
                <Col className="gutter-row" span={12}>
                    <div style={style.card}><BusinessCard /></div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={style.card}><BusinessCard /></div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={style.card}><BusinessCard /></div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div style={style.card}><BusinessCard /></div>
                </Col>
                </Row>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <div>
                    <button 
                       type="button" 
                       style={style.button}
                       // onClick={callback}
                       >
                        <LeftOutlined />
                    </button>
                    <button 
                       type="button" 
                       style={style.button}
                       // onClick={callback}
                       >
                        <RightOutlined />
                    </button>
                    </div>
                </div>
            </div>
            <div className='map-wrapper'>
                <BusinessMap />
            </div>
        </div>
    </div>
  )
}
