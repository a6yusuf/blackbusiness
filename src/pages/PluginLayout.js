import React from 'react'
import SearchBar from '../components/SearchBar'
import Result from '../components/Result';
import { useEffect, useState } from 'react';
import Axios from 'axios'


export default function PluginLayout() {

  const url = `${appLocalizer.apiUrl}/wprk/v1`;
  const [data, setData] = useState([])

  useEffect(() => {
    // const openlog = Axios.get(`${baseUrl}/api/thismonth?token=${token}`)
    // const sep = Axios.get(`${baseUrl}/api/monthly?token=${token}`)
    
    // Axios.all([openlog, sep])
    //     .then(Axios.spread((...res)=> {
    //         const open = res[0].data
    //         const emailData = res[1].data;
    //     }))
    Axios.get(`${url}/business`)
         .then(res => {
           console.log("Data: ", res.data)
         })
  }, [])
  
  return (
    <div style={{width: '100%'}}>
        <SearchBar />
        <Result />
    </div>
  )
}
