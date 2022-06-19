import React from 'react'
import '../frontend.scss'
import { BsArrowReturnLeft } from 'react-icons/bs';
import countries from './countries';


export default function BusinessPage({biz, showBiz}) {

    const styles = {
        wrapper: {
            position: "relative",
            marginBottom: 10
        },
        label: {
            display: "block",
            textTransform: "uppercase",
            color: "rgba(31,41,55,1)",
            fontSize: 12,
            fontWeight: 700,
            marginBottom: 0
        },
        input: {
            fontSize: 18,
            fontWeight: 700,
            width: "100%",
        }
    }

    const showOnMap = (lat, lon) => {
         
        // open the page as popup //
        let page = `http://maps.google.com/maps?f=q&q=${lon},${lat}&z=16`;
        let myWindow = window.open(page, "_blank", "scrollbars=yes,width=900,height=900,top=300");
        // focus on the popup //
        myWindow.focus();        
      }

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
    const handleCat = arg => {
        try {
            let newArr = arg.filter(item => item.split('_')[0] === 'cat')
            .map(item => capitalizeFirstLetter(item.slice(4)))
            .join(', ')
            return newArr
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='gb-flex gb-flex-col gb-bg-gray-200'>
        <div className='gb-flex gb-flex-col'>
            <span>
                <button 
                    type="button" 
                    className='button-wrapper'
                    onClick={showBiz}
                >
                    <BsArrowReturnLeft className='gb-text-base'/>
                </button>
            </span>
            <div className="gb-w-full gb-h-36 gb-bg-gray-800 gb-p-2 gb-flex gb-items-center">
                <div className="gb-m-2">
                    <p className="gb-text-3xl gb-text-gray-100 gb-mb-2 gb-font-semibold">
                    {biz.last_name}
                    </p>
                    {biz.first_name &&  <small className="gb-text-base gb-text-gray-100">{biz?.first_name }</small>}
                </div>
            </div>
            <div className='gb-flex gb-w-full gb-m-2'>
                <div className='gb-w-1/3 gb-flex gb-flex-col' style={{height: 300}}>
                    <img src={biz.profile_image_url_ssl} alt="profile_image" style={{height: '70%'}} />
                    <button type='button' style={{marginTop: 20}} onClick={() => showOnMap(biz.primary_address.lat, biz.primary_address.lng)}>
                        View Map
                    </button>
                </div>
                <div className='gb-w-2/3 gb-m-2 gb-mt-2 gb-ml-5'>
                    <div style={styles.wrapper}>
                        <label
                            style={styles.label}
                            htmlFor="grid-password">
                            Categories
                        </label>
                        <div style={styles.input}>
                            {handleCat(biz.tags)}
                        </div>
                    </div>
                    {biz.email && <div style={styles.wrapper}>
                        <label
                            style={styles.label}
                            htmlFor="grid-password">
                            Email
                        </label>
                        <div style={styles.input}>
                            {biz.email}
                        </div>
                    </div>}
                    {biz.phone && <div style={styles.wrapper}>
                        <label
                            style={styles.label}
                            htmlFor="grid-password">
                            Phone
                        </label>
                        <div style={styles.input}>
                            {biz.phone}
                        </div>
                    </div>}
                    {biz.primary_address.city && <div style={styles.wrapper}>
                        <label
                            style={styles.label}
                            htmlFor="grid-password">
                            City
                        </label>
                        <div style={styles.input}>
                            {biz.primary_address.city}
                        </div>
                    </div>}
                    {biz.primary_address.state && <div style={styles.wrapper}>
                        <label
                            style={styles.label}
                            htmlFor="grid-password">
                            State
                        </label>
                        <div style={styles.input}>
                            {biz.primary_address.state}
                        </div>
                    </div>}
                    {biz.primary_address.country_code && <div style={styles.wrapper}>
                        <label
                            style={styles.label}
                            htmlFor="grid-password">
                            Country
                        </label>
                        <div style={styles.input}>
                            {countries.filter(item => item.code === biz.primary_address.country_code)[0].name}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </div>
  )
}
