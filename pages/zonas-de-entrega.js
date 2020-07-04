
import { useRef, useEffect } from 'react'
import styledMapType from '../components/theme/map'

const DeliveryZone = () => {
  let map
  useEffect(() => {
      map = new google.maps.Map(document.getElementById("map-container"), {
        center: { lat: -34.61926, lng: -58.46314 },
        zoom: 11,
        mapTypeId: 'terrain'
      });

      const deliveryPoligon = [
        [-58.46314,-34.53426],[-58.45173,-34.54078],[-58.43079,-34.55238],[-58.4174,-34.56142],[-58.40607,-34.56764],[-58.39268,-34.57584],[-58.37723,-34.57895],[-58.36899,-34.59506],[-58.36487,-34.62134],[-58.35461,-34.63035],[-58.35217,-34.63547],[-58.35629,-34.63999],[-58.35629,-34.64451],[-58.36899,-34.65439],[-58.39405,-34.66286],[-58.41499,-34.65863],[-58.42323,-34.6623],[-58.45983,-34.70533],[-58.52863,-34.65354],[-58.53035,-34.61662],[-58.50038,-34.54953],[-58.46314,-34.53426]
      ].map(c => ({lng: c[0], lat:c[1] }));

      const deliveryPath = new google.maps.Polyline({
        path: deliveryPoligon,
        geodesic: true,
        strokeColor: '#e83e8c',
        fillColor: '#e83e8c',
        fillOpacity: 0.20,
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
    
      deliveryPath.setMap(map);

      map.mapTypes.set('styled_map', new google.maps.StyledMapType(styledMapType));
      map.setMapTypeId('styled_map');
  },[])

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
          <div id="map-container" className='container'></div>
          </div>
        </div>
      </div>
            
          
    </main>
  )
};

export default DeliveryZone;
