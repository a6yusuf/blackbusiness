import "./frontend.scss"
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from 'axios'


const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const url = `${appLocalizer.apiUrl}/wprk/v1/settings`;

  return (
    <div className="boilerplate-frontend">
      <h2>Hello front</h2>
    </div>
  )
}
