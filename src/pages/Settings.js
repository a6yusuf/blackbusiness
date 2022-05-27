import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const Settings = () => {

    const [data, setData ] = useState({});
    const [status, setStatus ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const url = `${appLocalizer.apiUrl}/wprk/v1`;

    const handleData = e => {
        setData(prev => {
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

    useEffect( () => {
        axios.get(`${url}/ping`)
        .then( ( res ) => {
            console.log("Data: ", JSON.parse(res.data))
            setStatus(JSON.parse(res.data).status)
        } )
    }, [] )

    return(
        <>
            <NavBar status={status}/>
            <form>
                <TextInput label="username" name="username" type="text" callback={handleData}/>
                <TextInput label="password" name="password" type="password" callback={handleData}/>
                <Button text={loading ? "Please wait..." : "Login"} bgColor='black' tColor='white' callback={handleSubmit}/>
            </form>
        </>
    )
}

export default Settings;