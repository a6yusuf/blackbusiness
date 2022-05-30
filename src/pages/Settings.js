import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Settings = () => {

    const [data, setData ] = useState({})
    const [location, setLocation ] = useState({})
    const [status, setStatus ] = useState('');
    const [current, setCurrent ] = useState('login');
    const [loading, setLoading] = useState(false);

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
                console.log("Res: ", res.data)
                setLoading(false);
            } )
            // console.log("Dt: ", username, ' ', password)
        }else{
            alert("Please, enter valid credentials!")
        }
    }

    const submitLoc = (e) => {
        e.preventDefault();
        const {long, lat, distance, googleApiKey} = location
        if(distance > 0) { 
            setLoading(true);
            axios.post( `${url}/location`, {
                longitude: long,
                latitude: lat,
                distance: distance,
                googleApiKey: googleApiKey
            }, {
                headers: {
                    'content-type': 'application/json',
                    'X-WP-NONCE': appLocalizer.nonce
                }
            } )
            .then( ( res ) => {
                console.log("Res: ", res.data)
                setLoading(false);
            } )
        // console.log("Dt: ", username, ' ', password)
        }else {
            alert("Enter positive distance")
        }
    }

    useEffect( () => {
        axios.get(`${url}/ping`)
        .then( ( res ) => {
            console.log("Data: ", JSON.parse(res.data))
            setStatus(JSON.parse(res.data).status)
        } )
    }, [] )

    return(
        <>
            <NavBar status={status} current={current} setCurr={setCurrent}/>
            {current === 'login' && <form>
                <h2 style={{fontWeight: 700, margin: 10, fontSize: 25}}>Login</h2>
                <TextInput label="username" name="username" type="text" callback={handleData}/>
                <TextInput label="password" name="password" type="password" callback={handleData}/>
                <Button text={loading ? "Please wait..." : "Login"} bgColor='black' tColor='white' callback={handleSubmit}/>
            </form>}
            {current === 'location' && <form>
                <div style={{display: 'flex', flexDirection: 'column', margin: 10}}>
                    <h2 style={{fontWeight: 700, margin: 5, fontSize: 25}}>Set Default Location</h2>
                    <small style={{fontWeight: 500, margin: 5}}>Leave blank if you want to use your users' locations</small>
                </div>
                <TextInput label="longitude" name="long" type="text" callback={handleLocation}/>
                <TextInput label="latitude" name="lat" type="text" callback={handleLocation}/>
                <TextInput label="distance (mile square)" name="distance" type="number" callback={handleLocation}/>
                <TextInput label="google api key" name="googleApiKey" type="text" callback={handleLocation}/>
                <Button text={loading ? "Please wait..." : "Save"} bgColor='black' tColor='white' callback={submitLoc}/>
            </form>}
        </>
    )
}

export default Settings;