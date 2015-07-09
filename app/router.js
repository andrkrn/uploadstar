import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.resource('posts', function() {
    this.route('posts.show', {path: '/:id'});
  });

  this.resource('account', {path: '/u/:id'}, function() {

  });
});

export default Router;
