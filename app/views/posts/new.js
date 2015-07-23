import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var that = this;

    $('.file-upload').fileupload({
      done: function(e, data) {
      }
    })
  },

  willClearRender: function() {
    var that = this;

    if (that.$().find('.file-upload').is(':visible')) that.$().find('.file-upload').fileupload('destroy');
  }
});
