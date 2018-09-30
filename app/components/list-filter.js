import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    /*
      this._super(...arguments);
      super function 이 필요할지 모르는 많은 optional
      parameter 들을 encapsulate 하는 것이다.
    */
    this._super(...arguments);
    this.cityInputAction('').then((results) => this.set('results', results));
  },

  actions: {
    /*
      rentals 의 list 로 search term filter 를 apply 하고,
      results 라는 component attribute 를 set 한다.
      results 는 template 안에 yield helper 로 pass 된다.
    */
    handleFilterEntry() {
      /*
        from list-filter.hbs input
        this.value:
      */
      let filterInputValue = this.value;
      let filterAction = this.cityInputAction;

      filterAction(filterInputValue).then((filteredResults) => this.set('results', filteredResults));
    }
  }
});
