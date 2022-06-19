import React from "react"
import ReactDOM from "react-dom"
import "./frontend.scss"
import PluginLayout from './pages/PluginLayout';


const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {

  return (
    <div className="boilerplate-frontend">
      <PluginLayout />
    </div>
  )
}