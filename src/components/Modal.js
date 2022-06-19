import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import '../frontend.scss'

export default function Modal(props) {
//   const [showModal, setShowModal] = React.useState(false);
  return (
        <>
          <div
            className="gb-justify-center gb-items-center gb-flex gb-overflow-x-hidden gb-overflow-y-auto gb-fixed gb-inset-0 gb-z-50 gb-outline-none gb-focus:outline-none"
          >
            <div className="mod gb-relative gb-my-6 gb-mx-auto gb-max-w-3xl gb-w-10/12 gb-md:w-4/12" style={{ zIndex: 1000}}>
              {/*content*/}
              <div className="gb-border-0 gb-rounded-lg gb-shadow-lg gb-relative gb-flex gb-flex-col gb-bg-gray-300 gb-w-full gb-outline-none gb-focus:outline-none">
                       {/*header*/}
                <div className="gb-flex gb-items-start gb-justify-between gb-p-5 gb-border-b gb-border-solid gb-border-blueGray-200 gb-rounded-t" onClick={props.close}>
                  <h3 className="gb-text-2xl gb-font-semibold">
                    {props.title}
                  </h3>
                </div>
                <div className="gb-relative gb-flex-auto" >
                  {props.children}
                </div>
              </div>
              <div className="close_overlay" onClick={props.close}><AiOutlineClose className="font-extrabold" style={{fontSize: '25px'}}/></div>
            </div>
          </div>
          <div className="gb-opacity-25 gb-fixed gb-inset-0 gb-z-40 gb-bg-black" onClick={props.close} ></div>
        </>
  )}