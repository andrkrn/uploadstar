import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Controller.extend(ApplicationRouteMixin, {
  actions: {
    sessionRequiresAuthentication: function() {
      this.transitionToRoute('login');
    }
  }
});
