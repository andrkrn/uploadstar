import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('sessions', function() {
    this.route('new');
  });
  this.resource('registrations', function() {
    this.route('new');
  });

  this.resource('posts', function() {
    this.route('new');
    this.route('show', {path: '/:id'});
  });

  this.resource('users', function() {
    this.route('show', {path: '/:id'});
    this.route('edit', {path: '/:id/edit'});
  });
});

export default Router;
