import Ember from 'ember';
import CurrentUser from './../mixins/current-user';

export default Ember.Controller.extend(CurrentUser, {
  needs: ['current-user'],
  actions: {
    sessionRequiresAuthentication: function() {
      this.transitionToRoute('login');
    },

    invalidateSession: function() {
      var that = this,
          user = that.currentUser;

      that.get('session').invalidate().then(function() {
        user.set('model', null);
      }, function() {
        console.info('Logged out failed.');
      });
    }
  }
});
