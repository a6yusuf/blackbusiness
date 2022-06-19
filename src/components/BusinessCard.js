import React from 'react'
import '../frontend.scss'
import { FaCaretRight } from 'react-icons/fa';


export default function BusinessCard({data}) {

    return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
        <p className='gb-text-base gb-m-2 gb-font-bold'>{data.last_name}</p>
            <div className='gb-m-1 gb-text-sm'>
                <span className='gb-font-medium gb-text-sm gb-break-words'>Description</span>:{data.first_name}
            </div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: 5}}>
            <p className='gb-text-base gb-m-3 gb-font-bold'>View</p>
            <span>
                <button 
                    type="button" 
                    className='button-wrapper'
                    // onClick={callback}
                >
                    <FaCaretRight className='gb-text-base'/>
                </button>
            </span>
        </div>
    </div>
  )
}
