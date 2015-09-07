import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePost: function() {
      var that = this,
          data = that.getProperties('model.caption', 'model.attachment'),
          post = that.get('model');

      debugger
      post.setProperties(data);
      post.save().then(function() {
        that.transitionToRoute('posts.show', post);
      }).catch(function(reason) {
        console.log(reason);
      });
    },
  }
});
