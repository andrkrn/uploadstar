import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateUser: function() {
      var that = this,
          user = that.get('model');

      user.save().then(function() {
        // that.send('updateSession');
        alert('Update Success!');
      }, function() {
        console.log('Update failed!');
      })
    },

    updateSession: function() {
      var that = this,
          user = that.get('model');

      if(!Ember.isEmpty(that.get('session.secure'))) {
        var session = that.get('session.secure');
        debugger
        // session.set('full_name', user.get('full_name'));
        // session.save();
      }
    }
  }
});
