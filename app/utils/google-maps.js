import EmberObject from '@ember/object';

const google = window.google;

export default EmberObject.extend({
/*
  createMap:
  our map element
  our location 의 좌표를 lookup 하는 google.maps.Geocoder,
  resolved location 에 근거한 our map 을 pin 하는 google.maps.Marker 인
  our map element 를 create 하기 위하여 google.maps.Map 의 사용을 만드는
  single function
*/

  init() {
    /*
    our location 의 좌표를 lookup 하는 google.maps.Geocoder
    */
    this.set('geocoder', new google.maps.Geocoder());
  },

  createMap(element, location) {
    let map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
    this.pinLocation(location, map);
    return map;
  },

  pinLocation(location, map) {
    this.geocoder.geocode({address: location}, (result, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        let geometry = result[0].geometry.location;
        let position = { lat: geometry.lat(), lng: geometry.lng() };
        map.setCenter(position);
        /*
        resolved location 에 근거한 our map 을 pin 하는 google.maps.Marker
        */
        new google.maps.Marker({ position, map, title: location });
      }
    });
  }

});
