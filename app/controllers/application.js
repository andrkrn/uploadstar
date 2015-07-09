import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Controller.extend(ApplicationRouteMixin, {
  actions: {
    restore: function(properties) {
      debugger
      var _this            = this;
      var propertiesObject = Ember.Object.create(properties);
      return new Ember.RSVP.Promise(function(resolve, reject) {
        if (!Ember.isEmpty(propertiesObject.get(_this.tokenAttributeName)) && !Ember.isEmpty(propertiesObject.get(_this.identificationAttributeName))) {
          resolve(properties);
        } else {
          reject();
        }
      });
    },
    sessionRequiresAuthentication: function() {
      this.transitionToRoute('login');
    }
  }
});
