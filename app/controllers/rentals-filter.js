import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
  /*
    controller 는 대응하는 templates 에 available 한
    actions 과 properties 를 contain 한다.
    user 가 component 안에 text field 에 type 할때,
    controller 안에 filterByCity 가 call 되어진다.
    this action 은 value property 안에서 적용하고,
    user 가 type 한것과 match 하는 records 에 대한
    data store 안의 rental data 를 filter 한다.
  */
    filterByCity(param) {
      if (param != '') {
        /*
          rental: model name
          city: filter attribute
        */
        return this.store.query('rental', {city: param });
      } else {
        return this.store.findAll('rental');
      }
    }
  }
});
