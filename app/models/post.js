import DS from 'ember-data';

export default DS.Model.extend({
  caption: DS.attr('string'),
  user: DS.belongsTo('user'),
  attachment_url: DS.attr('string')
});
