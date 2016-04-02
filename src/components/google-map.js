import React from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";
import _ from 'lodash';

export default props => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{ height: "100%" }} /> }
      googleMapElement={
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{lat: props.lat, lng: props.lon}}
          >
        </GoogleMap>
      }
    />
  );
}