import Ember from 'ember';

export default Ember.Component.extend({
  elementId: 'disqus_thread',
  classNames: ['comments'],
  timer: null,

  setupDisqus: function() {
    var that = this,
        controller = that.get('parentView.controller'),
        title = controller.get('title');

    window.disqus_title = title;
    if (!window.DISQUS) {
      var disqus_shortname = 'andrikurnia';
      window.disqus_shortname = disqus_shortname;
      /* * * DON'T EDIT BELOW THIS LINE * * */
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
  }.on('didInsertElement'),

  loadNewPostComments: function() {
    var that = this;
    if (window.DISQUS) {
      that.reset();
    } else {
      that.set('timer', Ember.run.debounce(that, that.loadNewPostComments, 100));
    }
  }.on('willInsertElement'),

  reset: function() {
    var that = this,
        controller = that.get('parentView.controller'),
        postIdentifier = controller.get('urlString'),
        postUrl = window.location.href;

    Ember.run.scheduleOnce('afterRender', function() {
      window.DISQUS.reset({
        reload: true,
        config: function() {
          this.page.identifier = postIdentifier;
          this.page.url = postUrl;
        }
      });
    });
  }
});