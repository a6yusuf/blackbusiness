import React from 'react'
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react'
import useWindowDimensions from './useWindowDimensions';
import apiKey from './googleApiKey';
import '../frontend.scss'


const BusinessMap = ({locations, data}) => {

    const { width } = useWindowDimensions();
    const [bound, setBound] = React.useState()
    const [center, setCenter] = React.useState()
    const [activeMarker, setActiveMarker] = React.useState({})
    const [showingInfoWindow, setShowingInfoWindow] = React.useState(false)

    // let locations = [
    //   {lat: 6.463631, lng: 3.848616 },
    //   {lat: 6.4624, lng: 3.315929},
    //   {lat: 6.4780, lng: 3.3427},
    //   {lat: 6.6180, lng: 3.3209}
    // ]


    React.useEffect(() => {

        var bounds = new window.google.maps.LatLngBounds();
        var centers = new window.google.maps.LatLngBounds();
        for (var i = 0; i < locations?.length; i++) {
          centers.extend(locations[i]);
          bounds.extend(locations[i]);
        }
        setCenter(centers)
        setBound(bounds)
    }, [locations])

    const handleMarker = (arg, i) => {
      setActiveMarker(arg)
      setShowingInfoWindow(true)
      let activeLoc = data[i]
      console.log("Cliked: ", activeLoc.last_name)
    }
    

  return (
    <div className='google-map'>
        {(
        <Map
          google={window.google}
          containerStyle={{
            width: "100%",
            height: "100%",
          }} 
          initialCenter={center}
          zoom={15}
          bounds={bound}
        >
            <Marker
              // title={'The marker`s title will appear as a tooltip.'}
              position={locations[0]} 
              onClick={() => handleMarker(locations[0], 0)} />
            <Marker
              // title={'Dolores park'}
              position={locations[1]} 
              onClick={() => handleMarker(locations[1], 1)}/>
            <Marker />
            <Marker
              // title={'Dres park'}
              position={locations[2]} 
              onClick={() => handleMarker(locations[2], 2)}/>
            <Marker />
            <Marker
              // title={'Dres'}
              position={locations[3]}
              onClick={() => handleMarker(locations[3], 3)}>
                <InfoWindow
                  visible={true}
                  style={{background: 'red', color: 'black'}}
                  >
                    <div >
                      <p>Click on the map or drag the marker to select location where the incident occurred</p>
                    </div>
                </InfoWindow>
            </Marker >
            {/* <InfoWindow
              marker={activeMarker}
              visible={showingInfoWindow}>
                <div>
                  <h1>{"Title"}</h1>
                </div>
            </InfoWindow> */}
        </Map>
      )}
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: apiKey
  })(BusinessMap)