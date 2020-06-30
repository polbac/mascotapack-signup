
import { compose, withProps } from "recompose"
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer,
} = require("react-google-maps")

import styleMap from '../components/theme/map'



const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCAukVe6iSuiblVcgpVcsEXuYR8ArmgweQ",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div class='map' />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: -34.6156625, lng: -58.5033384 }}
    mapTypeId= {"terrain"}
    style
    defaultOptions={{
        styles: styleMap,
        disableDefaultUI: true
    }}
  >
    <KmlLayer
      url={"delivery.kmz"}
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
);

const DeliveryZone = () => {

  return (
    <main className='delivery-zone text-left'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='text-left'>Zonas de entrega</h2>
              <p>Por el momento sólo estamos haciendo envios a Capital Federal, más adelante habilitaremos nuevas zonas.</p>
              <p><b>Mantenete al tanto!</b></p>
          </div>
          <div className='col'>
            <Map />  
          </div>
        </div>
      </div>
            
          <div className='container'>
            
          </div>
    </main>
  )
};

export default DeliveryZone;
