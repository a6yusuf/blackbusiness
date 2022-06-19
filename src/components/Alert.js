import React from "react";
import { FaBell } from "react-icons/fa";
import '../frontend.scss';

const Alert = ({ show, msg, type }) => {

  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    setShowAlert(show)
    if(show === true){
      setTimeout(() => {
          setShowAlert(false)
      }, 3000);
    }
  }, [show])

  const style = {
      
himaryalertdanger: {
    color: 'white',
    paddingLeft: '1.5rem' /* 24px */,
    paddingRight: '1.5rem' /* 24px */,
    paddingTop: '1rem' /* 16px */,
    paddingBottom: '1rem' /* 16px */,
    borderWidth: 0,
    borderRadius: '0.25rem' /* 4px */,
    position: 'relative',
    marginBottom: 16,
    backgroundColor: 'rgba(239, 68, 68, 1)',
  },
  himaryalertsuccess: {
    color: 'white',
    paddingLeft: '1.5rem' /* 24px */,
    paddingRight: '1.5rem' /* 24px */,
    paddingTop: '1rem' /* 16px */,
    paddingBottom: '1rem' /* 16px */,
    borderWidth: 0,
    borderRadius: '0.25rem' /* 4px */,
    position: 'relative',
    marginBottom: 16,
    backgroundColor: 'rgba(16, 185, 129, 1)',
  },
  himaryalerticon: {
    display: 'inline-block',
    fontSize: '1.25rem' /* 20px */,
    lineHeight: '1.75rem' /* 28px */,
    marginRight: 20,
    verticalAlign: 'middle',
  },
  himaryalertmessage: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: 32,
    fontSize: 16
  },
  himaryalertclosebtn: {
    position: 'absolute',
    backgroundColor: 'transparent',
    fontSize: '1.5rem' /* 24px */,
    lineHeight: '2rem' /* 32px */,
    fontWeight: 600,
    lineHeight: 1,
    right: 0,
    top: 0,
    marginTop: 16,
    marginRight: 24,
    outline: '2px solid transparent',
    outlineOffset: 2,
    border: 'none',
    cursor: 'pointer'
  }
  }

  return (
    <>
      {showAlert ? (
        <div style={{zIndex: 10000, position: 'fixed', right: '32px'}} >
        <div
          style={ type === 'Error' ? style.himaryalertdanger : style.himaryalertsuccess
          }
        >
          <span style={style.himaryalerticon}>
            <FaBell/>
          </span>
          <span style={style.himaryalertmessage}>
            <strong style={{textTransform: 'capitalize'}}>{type}!</strong> {msg}
          </span>
          <button
            style={style.himaryalertclosebtn}
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div></div>
      ) : null}
    </>
  );
};

export default Alert;