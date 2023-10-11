import React from "react";
import GoogleMapReact from "google-map-react";

export class Map extends React.Component {
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "",
        }}
        defaultCenter={{
          lat: 43.854,
          lng: -79.057,
        }}
        defaultZoom={11}
        layerTypes={[]}
        options={{ styles: [] }}
      ></GoogleMapReact>
    );
  }
}

export default Map;
