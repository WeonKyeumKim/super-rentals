/*
  rentals.js 에 있어야 하는 것과 같다.
*/
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('rental');
  }
});
