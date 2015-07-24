import DS from 'ember-data';

export default DS.Model.extend({
  full_name: DS.attr('string'),
  email: DS.attr('string'),
  token: DS.attr('string'),

  posts: DS.hasMany('post', { async: true })
});
