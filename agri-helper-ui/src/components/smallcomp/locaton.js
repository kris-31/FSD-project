

// import React, { useEffect } from 'react';

// const GoogleMap = () => {
//   useEffect(() => {
//     const loadGoogleMapsScript = () => {
//       const script = document.createElement('script');
//       script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCaw7a21UjZNeggdAW0VdeYO2kt2LlO0YA`;
//       script.async = true;
//       script.defer = true;
//       script.addEventListener('load', initMap);
//       document.body.appendChild(script);
//     };

//     const initMap = () => {
//       new window.google.maps.Map(document.getElementById('map'), {
//         center: { lat: 12.9715987, lng: 77.5945627 },
//         zoom: 14,
//       });
//     };

//     loadGoogleMapsScript();
//   }, []);

//   return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
// };

// export default GoogleMap;
