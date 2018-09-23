import DS from 'ember-data';

export default DS.Model.extend({
  /*
    exclude data's type and id
    only define attributes of mirage
  */
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  bedrooms: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
