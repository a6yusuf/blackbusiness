import React from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import useWindowDimensions from './useWindowDimensions';

const BusinessMap = ({location}) => {

    const { width } = useWindowDimensions();

    React.useEffect(() => {
      console.log("New width: ", width)
    }, [width])
    

  return (
    <div>
        {(
        <Map
          google={window.google}
          containerStyle={{
            width: width > 558 ? "46vw" : "90vw",
            // height: "calc(100vh - 135px)",
            height: "70vh",
          }} 
          center={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={13}
          disableDefaultUI={true}
        >
            <Marker position={{lat: 37.778519, lng: -122.405640}} onClick={() => setHighLight(i)} />
        </Map>
      )}
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
  })(BusinessMap)