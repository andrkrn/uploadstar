import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var that = this;

    $('.file-upload').fileupload({
      done: function(e, data) {
      }
    })
  }
});
