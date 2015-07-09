import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  token: DS.attr('string'),

  posts: DS.hasMany('post', { async: true })
});
