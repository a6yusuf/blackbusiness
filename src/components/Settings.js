import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {

    const [data, setData ] = useState({});
    const [ loading, setLoading ] = useState(false);

    const url = `${appLocalizer.apiUrl}/wprk/v1/settings`;

    const handleSubmit = e => {
        e.preventDefault();
        if(data.username && data.password){
            setLoading(true);
            axios.post( url, {
                usename: data.username,
                password: data.password
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
        }
    }

    useEffect( () => {
        axios.get( url )
        .then( ( res ) => {
            console.log("Data: ", res.data)
        } )
    }, [] )

    return(
        <React.Fragment>
            <h2>Black Business Admin</h2>
        </React.Fragment>
    )
}

export default Settings;