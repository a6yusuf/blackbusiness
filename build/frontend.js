/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend.scss */ "./src/frontend.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);



 // import Payment from "./Payment"
// import Button from "./Button"
// import Details from "./Details"
// import AlphabeticID from './AlphabeticId';
// import Axios from 'axios'
// import Checkout from "./Checkout"
// import Thankyou from "./Thankyou"

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");
divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OurComponent, data), div);
  div.classList.remove("boilerplate-update-me");
});

function OurComponent(props) {
  // const [data, setData] = useState({parentName: '', amount: 0, parentPhone: '', ward: []})
  // const [page, setPage] = useState('start')
  // const [sessionId, setSessionId] = useState('')
  // const [orderId, setOrderId] = useState('')
  // const [successIndicator, setSuccessIndicator] = useState('')
  // const [resultIndicator, setResultIndicator] = useState('')
  // const [loading, setLoading] = useState(false)
  const style = {
    btn: {
      backgroundColor: 'purple',
      borderRadius: 4,
      color: '#fff',
      fontSize: 14,
      height: 30,
      padding: 5,
      textAlign: 'center',
      margin: 5,
      cursor: 'pointer'
    }
  }; // const updateData = e => {
  //   setData(prev => {
  //     let nd = {...prev, [e.target.id] : e.target.value}
  //     // console.log(nd)
  //     return nd
  //   })
  // }
  // const updateKid = arg => {
  //     const uid = Date.now() + parseInt(Math.random() * 100);
  //     let dt = {...data, parentName: arg.parentName, parentPhone: arg.parentPhone, ward: [...data.ward, {id: uid, name: arg.wName, class: arg.wClass}]}
  //     setData(dt)
  //     // console.log(dt)
  // }
  // const removeKid = arg => {
  //   if(confirm("Do you really want to delete?")){ 
  //   let nd = data.ward.filter(item => item.id !== arg)
  //   setData(prev => {
  //     return {...prev, ward: nd}
  //   })
  // }
  // }
  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //   maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  // });

  const url = `${appLocalizer.apiUrl}/wprk/v1/settings`; // let param = new URLSearchParams(window.location.search);
  // let resultInd = param.get('resultIndicator')
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "https://fbn.gateway.mastercard.com/checkout/version/61/checkout.js";
  //   script.setAttribute("data-error", errorCallback);
  //   script.setAttribute("data-cancel", cancelCallback);
  //   document.body.appendChild(script);
  //   const success = localStorage.getItem('successInd') !== undefined ? localStorage.getItem('successInd') : '';
  //   setSuccessIndicator(success)
  //   if(resultInd){
  //     setResultIndicator(resultInd)
  //     setPage("thankyou")
  //   }
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);
  // function errorCallback(error) {
  //   console.log(JSON.stringify(error));
  //   window.location.href = window.location.origin
  // }
  // function cancelCallback() {
  //   console.log('Payment cancelled');
  //   window.location.reload(true);
  // }
  // const handleCheckout = () => {
  //   setLoading(true)
  //   const uid = Date.now() * parseInt((Math.random() * 100) + 100);
  //   let amount = props.schoolFee * data.ward.length
  //   let orId = AlphabeticID.encode(uid)
  //   setOrderId(orId)
  //   let dat = {
  //     merchantId: props.merchantId,
  //     password: props.apiPassword,
  //     amount: amount.toFixed(2),
  //     id: orId,
  //     redirectUrl: window.location.href
  //   }
  //   Axios.post(url, dat, {
  //     headers: {
  //         'X-WP-NONCE': appLocalizer.nonce
  //         }
  //     })
  //     .then(res => {
  //       let result = JSON.parse(res.data)
  //       setSessionId(result.session.id)
  //       setSuccessIndicator(result.successIndicator)
  //       localStorage.setItem('successInd', result.successIndicator);
  //       setPage('checkout')
  //     })
  //     .catch(err=> console.log("Error: ",err))
  // }
  // const handlePay = () => {
  //   let amount = props.schoolFee * data.ward.length
  //   window.Checkout.configure({
  //     session: { 
  //     id: sessionId
  //    },
  //    order:{
  //     amount: function(){
  //       return amount.toFixed(2); 
  //     },
  //     currency: 'USD',
  //     description: data.ward.length === 1 ? `School fee for ${data.ward.length} child` : `School fee for ${data.ward.length} children`,
  //     id: orderId
  //   },
  //   interaction: {
  //         merchant: {
  //             name: props.merchantName,
  //             address: {
  //                 line1: 'Lagos',
  //                 line2: 'Nigeria'            
  //             }    
  //         }
  //     }
  //   });
  //   window.Checkout.showPaymentPage()
  // }
  // const refresh = () => {
  //   // setPage('start')
  //   window.location.replace(window.location.origin)
  // }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "boilerplate-frontend"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Hello front"));
}

/***/ }),

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map