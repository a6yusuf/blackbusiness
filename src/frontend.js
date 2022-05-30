import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from 'axios'
import "./frontend.scss"
import PluginLayout from './pages/PluginLayout';


const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  

  const url = `${appLocalizer.apiUrl}/wprk/v1/settings`;

  console.log("URL: ", url)

  return (
    <div className="boilerplate-frontend">
      <PluginLayout />
    </div>
  )
}