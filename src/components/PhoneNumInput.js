import React from 'react'
import phoneCode from './phoneCode.json'

export default function PhoneNumInput({handleData}) {
 
  const [code, setCode] = React.useState('+93')
  const [phone, setPhone] = React.useState('')

  const merge = e => {
    let phon = e.target.value
    setPhone(phon)
    if(code){
      handleData(code + phon)
    }else{
      alert("Select country code!")
    }
  }

  React.useEffect(() => {
    if(phone){
      let phon = code + phone
      handleData(phon)
    }
  }, [code])
  

  return (
    <div className='gb-relative'>
        <div className="gb-absolute gb-inset-y-0 gb-left-0 gb-flex gb-items-center">
            <select onChange={e => setCode(e.target.value)} id="country_code" name="country_code" className="gb-focus:ring-indigo-500 gb-focus:border-indigo-500 gb-h-full gb-py-0 gb-pl-7 gb-border-transparent gb-bg-transparent gb-text-gray-500 gb-sm:text-base gb-rounded-md" style={{paddingRight: 0}}>
                {phoneCode.map((item, index) => <option key={index} value={item.dial_code} className="gb-m-1 gb-font-bold">{`${item.code} ${item.dial_code}`}</option>)}
            </select>
        </div>
        <input
            type="text"
            className="gb-pl-12 gb-px-3 gb-py-3 gb-placeholder-gray-400 gb-text-gray-700 gb-bg-white gb-rounded gb-text-sm gb-shadow gb-focus:outline-none gb-focus:shadow-outline gb-w-full"
            name="mobile_phone"
            id="mobile_phone"
            // value={phone}
            style={{ transition: "all .15s ease" }}
            onChange={merge}
        />
    </div>
  )
}