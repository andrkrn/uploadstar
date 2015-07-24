import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['current-user'],
  errors: false,
  password: '',

  actions: {
    authenticate: function() {
      var that = this,
          data = that.getProperties('identification', 'password'),
          user = that.get('controllers.current-user');

      that.get('session').authenticate('simple-auth-authenticator:devise', data).then(function() {
        
      }, function() {
        that.set('errors', true);
        that.setProperties({
          password: ''
        });
      });
    }
  }
});
