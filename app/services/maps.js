import Service from '@ember/service';
import { camelize } from '@ember/string';
import EmberObject from '@ember/object';

import MapUtil from '../utils/google-maps';

export default Service.extend({
  /*
    1.code 로 부터 maps API 를 abstract 하게될
    service locator 를 갖고 inject 되어진다.
    refactoring 과 maintenance 하기 쉽게 만듣다.
    2.처음 call 되어질때까지 initialize 되어지지 않는
    lazy-loaded 되어진다.
    3.browser 안에 service object 의 딱 one instance 만 있는
    singleton 이다. map data 를 keep 하도록 만듣다.
    */
  init() {
    this._super(...arguments);
    if (!this.cachedMaps) {
      this.set('cachedMaps', EmberObject.create());
    }
    if (!this.mapUtil) {
      this.set('mapUtil', MapUtil.create());
    }
  },

  /*
    만일 given location 에 map 이 있으면 사용하고,
    그렇지 않으면 create 하도록 Google Maps utility 를
    call 한다.
  */
  getMapElement(location) {
    let camelizedLocation = camelize(location);
    let element = this.get(`cachedMaps.${camelizedLocation}`);
    if (!element) {
      element = this.createMapElement();
      this.mapUtil.createMap(element, location);
      this.set(`cachedMaps.${camelizedLocation}`, element);
    }
    return element;
  },

  createMapElement() {
    let element = document.createElement('div');
    element.className = 'map';
    return element;
  }

});
