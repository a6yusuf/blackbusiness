import React from 'react'
import Modal from './Modal';
import countries from './countries';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Axios from 'axios';

export default function RecommendModal({close, login, recoAlert}) {

    const [data, setData] = React.useState({})
    const [load, setLoad] = React.useState(false)

    const url = `${appLocalizer.apiUrl}/wprk/v1`;

    const submit = e => {
        e.preventDefault()
        // console.log("data: ", data)
        const {business_name, country, city, street_address, zip_code, tags} = data
        if (business_name && country && city && street_address && zip_code && tags) {
            setLoad(true)
            let payload = {...data, userEmail: login.email, userPsw: login.password}
            Axios.post(`${url}/business`, payload)
                .then(res => {
                    console.log("Res: ", res.data)
                    if(res.data.status === 201){
                        recoAlert(true)
                        setLoad(false)
                        close()
                    }else{
                        alert("Error recommending business")
                    }
                })
        }else {
            alert("Required field(s) missing")
        }
    }

    const handleData = e => {
        setData(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const cat = ['accommodation', 'beauty', 'travel', 'education', 'food', 'legal', 'finance', 'health']
    
    
  return (
    <Modal title="Recommend Business" close={close}>
        <div className="gb-relative gb-flex gb-flex-col gb-min-w-0 gb-break-words gb-w-full gb-shadow-lg gb-rounded-lg gb-bg-gray-300 gb-border-0">
            <div className="gb-flex-auto gb-px-4 gb-lg:px-10 gb-py-10 gb-pt-10">
            <form onSubmit={submit}>
                <div className="gb-relative gb-w-full gb-mb-3">
                <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        Business Name
                        <span className='gb-text-red-600 gb-font-2xl'>*</span>
                    </label>
                    <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="business_name"
                        id="business_name"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    />
                </div>
                <div className="gb-relative gb-w-full gb-mb-3">
                <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        Categories
                        <span className='gb-text-red-600 gb-font-2xl'>*</span>
                    </label>
                    {/* <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="tags"
                        id="tags"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    /> */}
                    <select name="tags" onChange={handleData} className="gb-mb-2 gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-rounded gb-text-sm gb-shadow gb-border gb-border-black gb-focus:border-purple-700 gb-focus:outline-none gb-focus:shadow-outline gb-w-full">
                        {cat.map(item => <option key={item} value={`cat_${item}`}>{capitalizeFirstLetter(item)}</option>)}
                        {/* <option key="ns" value="nextStep">Proceed to next step</option>
                        <option key="nv" value="newVid">Proceed to new video</option> */}
                    </select>
                </div>
                <div className="gb-relative gb-flex gb-justify-between gb-w-full gb-mb-3">
                    <span>
                    <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        Phone
                    </label>
                    <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="phone"
                        id="phone"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    />
                    </span>
                    <span>
                    <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="email"
                        id="email"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    />
                    </span>
                </div>
                <div className="gb-relative gb-w-full gb-mb-3">
                    <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        Street Address
                        <span className='gb-text-red-600 gb-font-2xl'>*</span>
                    </label>
                    <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="street_address"
                        id="street_address"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    />
                </div>
                <div className="gb-relative gb-flex gb-justify-between gb-w-full gb-mb-3">
                    <span>
                        <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        City
                        <span className='gb-text-red-600 gb-font-2xl'>*</span>
                    </label>
                    <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="city"
                        id="city"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    />
                    </span>
                    <span>
                        <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        State
                    </label>
                    <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="state"
                        id="state"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    />
                    </span>
                </div>
                <div className="gb-relative gb-flex gb-justify-between gb-w-full gb-mb-3">
                    <span>
                        <label
                            className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                            htmlFor="grid-password"
                            >
                            Country
                            <span className='gb-text-red-600 gb-font-2xl'>*</span>
                        </label>
                        <select onChange={handleData} name="country" className="px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full">
                            {countries?.map((item, index) => <option key={index} value={item.code}>{item.name}</option>)}
                        </select>
                    </span>
                    <span>
                    <label
                        className="gb-block gb-uppercase gb-text-gray-800 gb-text-xs gb-font-bold gb-mb-2"
                        htmlFor="grid-password"
                    >
                        Zip Code
                        <span className='gb-text-red-600 gb-font-2xl'>*</span>
                    </label>
                    <input
                        type="text"
                        className="gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
                        name="zip_code"
                        id="zip_code"
                        style={{ transition: "all .15s ease" }}
                        onChange={handleData}
                    />
                    </span>
                </div>
                
                <div className="gb-text-center gb-mt-6">
                <button
                    className="gb-bg-purple-700 gb-hover:bg-purple-800 gb-text-white gb-active:bg-purple-700 gb-text-sm gb-font-bold gb-uppercase gb-px-6 py-3 gb-rgb-ounded gb-shadow gb-hover:shadow-lg gb-outline-none gb-focus:outline-none gb-mr-1 gb-mb-1 gb-w-full"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                >
                    {load ? <AiOutlineLoading3Quarters style={{display: 'gb-block', margin: '0 auto'}} 
                        className="gb-animate-spin gb-text-gray-50 gb-font-extrabold gb-text-xl" /> : 'Recommend'}
                </button>
                </div>
                <span className='gb-text-red-600 gb-font-3xl'>* Required field</span>
            </form>
            </div>
        </div>
    </Modal>
  )
}
