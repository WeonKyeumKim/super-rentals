import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    /* rental: model name */
    return this.store.findAll('rental');
  }
});
