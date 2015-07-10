import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function() {
      var that = this,
          data = that.getProperties('caption'),
          post = that.store.createRecord('post', data);

      post.save().then(function() {
        that.setProperties({
          caption: ''
        });
        that.transitionToRoute('posts.show', post);
      }).catch(function(reason) {
        console.log(reason);
      });
    },
  }
});
