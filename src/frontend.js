import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from 'axios'
import "./frontend.scss"


const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const [data, setData] = useState({parentName: '', amount: 0, parentPhone: '', ward: []})
  const [page, setPage] = useState('start')
  const [sessionId, setSessionId] = useState('')
  const [orderId, setOrderId] = useState('')
  const [successIndicator, setSuccessIndicator] = useState('')
  const [resultIndicator, setResultIndicator] = useState('')
  const [loading, setLoading] = useState(false)

  const style = {
    btn: {
        backgroundColor: 'purple',
        borderRadius: 4,
        color: '#fff',
        fontSize: 14,
        height: 30,
        padding: 5,
        textAlign: 'center',
        margin: 5,
        cursor: 'pointer'
    }
}


  const url = `${appLocalizer.apiUrl}/wprk/v1/settings`;

  console.log("URL: ", url)

  return (
    <div className="boilerplate-frontend">
      {/* <p style={{color: '#000', fontSize: 25, fontWeight: 800, padding: 10}}>Payment Widget</p>
      {page === 'start' && <><p style={{color: '#000', fontSize: 16, fontWeight: 600}}>School fee for a child is {formatter.format(props.schoolFee)}</p>
      <div className="stemfb-content-box">
        <Payment data={data} updateData={updateData} updateKid={updateKid} classes={props.classes}/>
        <Details data={data} removeKid={removeKid} />
      </div>
      <button disabled={data.ward.length === 0 } className="button button-primary" onClick={handleCheckout} style={style.btn}>{loading ? 'Please wait...' : 'Checkout'}</button>
      </>}
      {page === 'checkout' && 
      <><Checkout data={data} />
      <p style={{color: '#000', fontSize: 22, margin: 5, marginBottom: 10}}>Total amount is {formatter.format(props.schoolFee * data.ward.length)}</p>
      <Button click={handlePay} />
      </>}
      {page === 'thankyou' && <Thankyou success={resultIndicator === successIndicator} refresh={refresh}/>} */}

      <h2>Hello Front</h2>
    </div>
  )
}