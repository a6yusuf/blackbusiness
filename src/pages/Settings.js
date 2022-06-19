import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Alert from '../components/Alert';
import apiKey from '../components/googleApiKey';

const Settings = () => {

    const [data, setData ] = useState({})
    const [location, setLocation ] = useState({})
    const [status, setStatus ] = useState('');
    const [current, setCurrent ] = useState('login');
    const [loading, setLoading] = useState(false);
    const [loginAlert, setLoginAlert] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [locationAlert, setLocationAlert] = useState(false);
    const [locationError, setLocationError] = useState(false);

    const url = `${appLocalizer.apiUrl}/wprk/v1`;

    const handleData = e => {
        setData(prev => {
            return {...prev, [e.target.name]: e.target.value}})
      }

    const handleLocation = e => {
        setLocation(prev => {
            return {...prev, [e.target.name]: e.target.value}})
      }

    const handleSubmit = e => {
        e.preventDefault();
        const {username, password} = data
        if(username && password){
            setLoading(true);
            axios.post( `${url}/settings`, {
                username,
                password
            }, {
                headers: {
                    'content-type': 'application/json',
                    'X-WP-NONCE': appLocalizer.nonce
                }
            } )
            .then( ( res ) => {
                // console.log("Res: ", res.data)
                setLoading(false);
                setLoginAlert(true)
                // reset()
            } )
        }else{
            setLoginError(true)
            // reset()
        }
    }

    const submitLoc = (e) => {
        e.preventDefault();
        const {long, lat, distance} = location
        if(distance > 0) { 
            setLoading(true);
            axios.post( `${url}/location`, {
                longitude: long,
                latitude: lat,
                distance: distance,
                googleApiKey: apiKey
            }, {
                headers: {
                    'content-type': 'application/json',
                    'X-WP-NONCE': appLocalizer.nonce
                }
            } )
            .then( ( res ) => {
                // console.log("Res: ", res.data)
                setLoading(false);
                setLocationAlert(true)
                // reset()
            } )
        }else {
            setLocationError(true)
            // reset()
        }
    }

    useEffect( () => {
        axios.get(`${url}/ping`)
        .then( ( res ) => {
            console.log("Data: ", JSON.parse(res.data))
            setStatus(JSON.parse(res.data).status)
        } )
    }, [] )

    const reset = () => {
        setTimeout(() => {
            loginError ? setLocationError(false) : null
            locationError ? setLoginError(false) : null
        }, 3000);
    }

    return(
        <>
            <NavBar status={status} current={current} setCurr={setCurrent}/>
            <Alert msg="Login successfully." type="success" show={loginAlert} />
            <Alert msg="Please, enter valid credentials!" type="Error" show={loginError} />
            <Alert msg="Location saved successfully." type="Success" show={locationAlert} />
            <Alert msg="Enter positive distance" type="Error" show={locationError} />
            {current === 'login' && <form>
                <h2 style={{fontWeight: 700, margin: 10, fontSize: 25}}>Login</h2>
                <TextInput label="username" name="username" type="text" callback={handleData}/>
                <TextInput label="password" name="password" type="password" callback={handleData}/>
                <Button text={loading ? "Please wait..." : "Login"} bgColor='black' tColor='white' callback={handleSubmit}/>
            </form>}
            {current === 'location' && <form>
                <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
                    <h2 style={{fontWeight: 700, margin: 5, fontSize: 25}}>Set Default Location</h2>
                    {/* <small style={{fontWeight: 500, margin: 5}}>Leave blank if you want to use your users' locations</small> */}
                </div>
                <TextInput label="longitude" name="long" type="text" callback={handleLocation}/>
                <TextInput label="latitude" name="lat" type="text" callback={handleLocation}/>
                <TextInput label="distance (mile square)" name="distance" type="number" callback={handleLocation}/>
                {/* <TextInput label="google api key" name="googleApiKey" type="text" callback={handleLocation}/> */}
                <Button text={loading ? "Please wait..." : "Save"} bgColor='black' tColor='white' callback={submitLoc}/>
            </form>}
        </>
    )
}

export default Settings;