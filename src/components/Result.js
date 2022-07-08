import React from 'react'
import BusinessCard from './BusinessCard'
import BusinessMap from './BusinessMap';
import { useState } from 'react';
import useWindowDimensions from './useWindowDimensions';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import '../frontend.scss'

export default function Result({data, loading, filters, removeFilter, clearFilter, setBiz}) {

    const [page, setPage] = useState(1)
    const [con, setCon] = useState([])
    const [onMap, setOnMap] = useState()
    const [coOrdinates, setCoOrdinates] = useState([]);

    const { width } = useWindowDimensions();

    // React.useEffect(() => {
    //     console.log(width)
    // }, [width])

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
            cursor: 'pointer',
        }
      };

    const getFour = (arg, currentPage) => {
        return arg?.slice(4 * (currentPage - 1), 4 * currentPage);
        // return four
    }

    const next = () => {
        if(page < (data.length/4)){
            setPage(prev => prev + 1)
        }
    }

    const previous = () => {
        if(page > 1) {
            setPage(prev => prev - 1)
        }else{
            setPage(1)
        }
    }

    React.useEffect(() => {
        let nd = getFour(data, page)
        setCon(nd)
        let cords = [];
        nd.forEach((e) => {
          cords.push({ lat: Number(e.primary_address.lat), lng: Number(e.primary_address.lng)  });
        });
        setCoOrdinates(cords)
    }, [page])

    React.useEffect(() => {
        let nd = getFour(data, 1)
        setPage(1)
        setCon(nd)
        let cords = [];
        nd.forEach((e) => {
          cords.push({ lat: Number(e.primary_address.lat), lng: Number(e.primary_address.lng)  });
        });
        setCoOrdinates(cords)
    }, [data])
    

    const showOnMap = id => {
        const dt = con.filter(item => item.id === id)[0]
        setOnMap({lat: dt?.primary_address.lat, lng: dt?.primary_address.lng})
        setBiz(dt)
        // console.log("Loc: ", dt)
    }

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


  return (
    <div className='gb-flex gb-flex-col gb-bg-gray-200'>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{fontWeight: 800, margin: 5}}>Filters</p>
            <span style={{display: 'flex'}}>
                {
                 filters?.map((item,index) => <p key={index} className='gb-m-2 gb-p-2 gb-text-sm gb-font-medium'><AiOutlineClose className='gb-text-red-800 gb-cursor-pointer' style={{margin: -2}} onClick={() => removeFilter(item)} /> {capitalizeFirstLetter(item)}</p>
                 )}
                 {filters.length !== 0 && <p key="clear" className='gb-m-2 gb-p-2 gb-text-sm gb-font-medium gb-cursor-pointer' onClick={clearFilter}>Clear filter</p>}
                <p className='gb-m-2 gb-p-2 gb-text-sm gb-font-bold'>{ `${data?.length} Businesses found`}</p>
            </span>
        </div>
        <div className='result-wrapper'>
             <div className='business-wrapper'>
                 <div className='gb-flex gb-flex-wrap gb-md:flex-nowrap'>
                     {!loading && con.map((item, index) => <div key={index} className='business-card' onClick={() => showOnMap(item.id)} ><BusinessCard data={item} /></div>)}
                </div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <div>
                    <button 
                       type="button" 
                       style={{...style.button, opacity: page === 1 ? 0.5 : 1 }}
                       onClick={previous}
                       >
                        <FaCaretLeft className='gb-text-base' />
                    </button>
                    <button 
                       type="button" 
                       style={{...style.button, opacity: page === (data.length/4) ? 0.5 : 1 }}
                       onClick={next}
                       >
                        <FaCaretRight className='gb-text-base' />
                    </button>
                    </div>
                </div>
            </div>
            <div className='map-wrapper'>
                <BusinessMap locations={coOrdinates} data={con}/>
            </div>
        </div>
    </div>
  )
}
