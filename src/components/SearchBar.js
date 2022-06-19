import React from 'react'
import { FaSearchLocation } from 'react-icons/fa';
import '../frontend.scss'
import { usePlacesWidget } from "react-google-autocomplete";
import apiKey from './googleApiKey';
import Axios from 'axios'


export default function SearchBar({categories, add2Filter, searchLoc}) {

  const [display, setDisplay] = React.useState([])

  const url = `${appLocalizer.apiUrl}/wprk/v1`;


    // const onSearch = (value) => console.log(value);

    React.useEffect(() => {
      setDisplay(categories.slice(0,4))
    }, [])

    const capitalizeFirstLetter = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const { ref } = usePlacesWidget({
      apiKey: apiKey,
      onPlaceSelected: (place) => {
        try {
          let data = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            apiKey: apiKey
          }
          Axios.post(`${url}/locbusiness`, 
              data,{
                headers: {
                    'content-type': 'application/json',
                    'X-WP-NONCE': appLocalizer.nonce
                }
            })
            .then(res => {
              searchLoc(res.data)
            })
            .catch(err => console.log(err))
        } catch (error) {
          console.log(error)
        }
      }
    })


  return (
    <div className='search-bar'>
        <div style={{display: 'flex'}}>
            {
             categories.slice(0,4).map((item, index) => {
               return <p key={index} onClick={()=> add2Filter(index)} className='gb-m-2 gb-p-2 gb-text-sm gb-font-medium gb-cursor-pointer'>{capitalizeFirstLetter(item[0])}</p>
             })
            } 
        </div>
        <div style={{display: 'flex'}}>
            {/* <span style={{ width: 90}}><p className='gb-m-2 gb-p-2 gb-text-base gb-font-bold'>Search</p></span> */}
            <div className="gb-relative gb-flex gb-w-full gb-flex-wrap gb-items-stretch gb-mb-3 gb-m-2">
              <input ref={ref} type="text" placeholder="Enter location" className="gb-px-3 gb-py-3 gb-placeholder-slate-300 gb-text-slate-600 gb-relative gb-bg-white gb-bg-white gb-rounded gb-text-sm gb-border-0 gb-shadow gb-outline-none gb-focus:outline-none gb-focus:ring gb-w-full gb-pr-10"/>
              <span className="gb-z-10 gb-h-full gb-leading-snug gb-font-normal gb-absolute gb-text-center gb-text-slate-300 gb-absolute gb-bg-transparent gb-rounded gb-text-base gb-items-center gb-justify-center gb-w-8 gb-right-0 gb-pr-3 gb-py-3">
                 <FaSearchLocation className='gb-text-red-800 gb-text-2xl gb-cursor-pointer'/>
              </span>
        </div>
        </div>
    </div>
  )
}
