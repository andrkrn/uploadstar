import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),

  /* Relations */
  user: DS.belongsTo('user'),
  likes: DS.hasMany('like')
});
