import React from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import useWindowDimensions from './useWindowDimensions';
import apiKey from './googleApiKey';
import '../frontend.scss'


const BusinessMap = ({locations}) => {

    const { width } = useWindowDimensions();
    const [center, setCenter] = React.useState({})

    React.useEffect(() => {
        // set average of locations as the center
        let arr = Object.keys(locations);
        let getLat = (key) => locations[key]["lat"];
        let avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length;
    
        let getLng = (key) => locations[key]["lng"];
        let avgLng = arr.reduce((a, c) => a + Number(getLng(c)), 0) / arr.length;
    
        setCenter({ lat: avgLat, lng: avgLng });
    }, [locations, width])
    

  return (
    <div className='google-map'>
        {(
        <Map
          google={window.google}
          containerStyle={{
            width: "100%",
            height: "100%",
          }} 
          center={center}
          initialCenter={locations[0]}
          zoom={15}
          disableDefaultUI={true}
        >
            {locations.map((coords, i) => (
            <Marker position={coords} onClick={() => setHighLight(i)} />
          ))}
        </Map>
      )}
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: apiKey
  })(BusinessMap)