import Ember from 'ember';

export default Ember.Controller.extend({
  password: '',

  actions: {
    authenticate: function() {
      var that = this,
          data = that.getProperties('identification', 'password');
      that.get('session').authenticate('simple-auth-authenticator:devise', data).then(function() {
        console.log('success');
      }, function() {
        console.log('failed');
      });
    }
  }
});
