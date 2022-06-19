import React from 'react'
import '../frontend.scss'

export default function Recommend({openModal}) {

  return (
    <div style={{display: "flex", justifyContent: "right", margin: 5, background: '#000'}}>
        <button className='recommend-btn' onClick={openModal} >
            Recommend
        </button>
    </div>
  )
}
