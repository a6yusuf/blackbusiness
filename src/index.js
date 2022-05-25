// import "./index.scss"

// wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
//   title: "STEM Firstbank API",
//   icon: "welcome-learn-more",
//   category: "common",
//   attributes: {
//     merchantName: { type: "string" },
//     merchantId: { type: "string" },
//     apiPassword: { type: "string" },
//     schoolFee: { type: "string" },
//     classes: { type: "array" },
//   },
//   edit: EditComponent,
//   save: function () {
//     return null
//   }
// })

// function EditComponent(props) {

//   function updateMerchantName(e) {
//     props.setAttributes({ merchantName: e.target.value })
//   }

//   function updateMerchantId(e) {
//     props.setAttributes({ merchantId: e.target.value })
//   }
  
//   function updateApiPassword(e) {
//     props.setAttributes({ apiPassword: e.target.value })
//   }

//   function updateSchoolFee(e) {
//     props.setAttributes({ schoolFee: e.target.value })
//   }

//   function updateClasses(arg) {
//     props.setAttributes({ classes: arg })
//   }

//   const addClass = (item) => {
//     if(item && !items.includes(item)){
//       setItems(prev => {
//         return [...prev, item]
//       })
//       let list = [...items, item]
//       updateClasses(list)
//     }
//   }


//   const removeCl = (arg) => {
//     let ls = items.filter(item => item !== arg)
//     updateClasses(ls)
//     setItems(ls)
//   }

//   const [items, setItems] = React.useState(props.attributes.classes || [])
//   const [cl, setCl] = React.useState('')

//   const style = {
//     btn: {
//         backgroundColor: 'purple',
//         borderRadius: 4,
//         color: '#fff',
//         fontSize: 14,
//         height: 30,
//         padding: 5,
//         textAlign: 'center',
//         margin: 5,
//         cursor: 'pointer'
//     }
// }

//   return (
//     <div className="makeUpYourBlockTypeName">
//       <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
//         <span style={{margin: 5, padding: 5}}>
//           <h5>STEM Firstbank API Integration</h5>
//           <small>Please enter your admin setup details</small>
//         </span>
//         <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//           <input type="text" style={{margin: 10, padding: 5, display: 'block', width: '90%'}} value={props.attributes.merchantName} onChange={updateMerchantName} placeholder="Your merchant name" />
//           <input type="text" style={{margin: 10, padding: 5, display: 'block', width: '90%'}} value={props.attributes.merchantId} onChange={updateMerchantId} placeholder="Your merchant ID" />
//           <input type="text" style={{margin: 10, padding: 5, display: 'block', width: '90%'}} value={props.attributes.apiPassword} onChange={updateApiPassword} placeholder="Your API Password" />
//           <input type="text" style={{margin: 10, padding: 5, display: 'block', width: '90%'}} value={props.attributes.schoolFee} onChange={updateSchoolFee} placeholder="School fee (without the Dollar sign, no comma, no space)" />
//           <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//             <input type="text" style={{margin: 10, padding: 5, display: 'block', width: '70%'}} onChange={(e) => setCl(e.target.value)} placeholder="Enter classes available in the school" />
//             <div style={style.btn} onClick={() => addClass(cl)} >Add Class</div>
//           </div>
//           {/* class list */}
//           <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                 <p style={{margin: 5, padding: 5, fontWeight: 600}}>School classes</p>
//             </div>
//             <div style={{display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px'}}>
//                 {items?.map((item,index) => <div style={{padding: 4, display: 'flex'}} key={index}>
//                     <p key={index} style={{margin: 0, padding: 5, fontWeight: 400}}>{item}</p>
//                     <div style={style.btn} onClick={() => removeCl(item)} >❌</div>
//                 </div>)}
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Black Business",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    merchantName: { type: "string" },
    merchantId: { type: "string" },
    apiPassword: { type: "string" },
    schoolFee: { type: "string" },
    classes: { type: "array" },
  },
  // edit: EditComponent,
  save: function () {
    return null
  }
})


document.addEventListener( 'DOMContentLoaded', function() {
    var element = document.getElementById( 'wprk-admin-app' );
    if( typeof element !== 'undefined' && element !== null ) {
        ReactDOM.render( <App />, document.getElementById( 'wprk-admin-app' ) );
        // ReactDOM.render( <h1>Hello Admnin</h1>, document.getElementById( 'wprk-admin-app' ) );
    }
} )