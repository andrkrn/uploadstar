import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var that = this;

    $('.file-upload').fileupload({
      type: 'PUT',
      dataType: 'json',
      add: function(e, data) {
        data.submit();
      },
      progress: function(e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        console.log(progress)
      },
      done: function(e, data) {
      }
    });
  },

  willClearRender: function() {
    var that = this;

    if (that.$().find('.file-upload').is(':visible')) {
      that.$().find('.file-upload').fileupload('destroy');
    }
  }
});
