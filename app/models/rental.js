import DS from 'ember-data';

export default DS.Model.extend({
  /*
    Ember 는 Ember Data 라는 data management library 를 갖고
    persistent application data 를 deal 하는 것을 help 한다.  

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
