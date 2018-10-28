import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  /*
    maps 하는 our component 의 property 의 initializing 에 의하여
    our component 안으로 service 를 map 하는 것을 provide 한다.
    services 는 components 와 service injection 에 의한
    other ember object 안에 commonly available 하게 만들어 진다.

    import { inject as service } from '@ember/service'; 를 갖는
    property 를 initialize 할떄, ember 는 its name 과 matching 하는
    property 를 set 하도록 한다.

    maps service 으로써, our component 는 provided location 을 갖는
    getMapElement 을 call 할 것이다.
    component lifecycle hook 인 didInsertElement 의 implementing 에
    의한 service 로 부터 돌려받는 map element 를 append 한다.

    this function 은 component 의 markup 은 page 안으로 insert 된 후에,
    component render 동안에 run 한다.
  */
  maps: service(),

  didInsertElement() {
    this._super(...arguments);
    let mapElement = this.maps.getMapElement(this.location);
    let mapContainerElement = this.element.querySelector('.map-container');
    mapContainerElement.appendChild(mapElement);
  }
});
