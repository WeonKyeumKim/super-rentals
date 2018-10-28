import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  cityInput: '',

  init() {
    /*
      this._super(...arguments);
      super function 이 필요할지 모르는 많은 optional
      parameter 들을 encapsulate 하는 것이다.
    */
    this._super(...arguments);
    /* async
    this.cityInputAction('').then((results) =>
      this.set('results', results));
    */

    this.cityInputAction('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    /*
      rentals 의 list 로 search term filter 를 apply 하고,
      results 라는 component attribute 를 set 한다.
      results 는 template 안에 yield helper 로 pass 된다.

      filterResults 의 query property 를 component 의 cityInput 와
      compare 한다.
    */
    handleFilterEntry() {
      /*
        from list-filter.hbs input
        this.value:
      */
      let filterInputValue = this.cityInput;
      let filterAction = this.cityInputAction;

      /* async
      filterAction(filterInputValue).then((filterResults) =>
        this.set('results', filterResults));
      )

      */
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.cityInput) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
});
