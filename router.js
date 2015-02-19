
Router.route('/', {
  name: 'articleHome'
});

Router.route('/articles', {
  name: 'articleIndex'
});

Router.route('/articles/new', {
  name: 'articleNew',
  data: function() { return { title: '', content: '' }; }
});
Router.route('/articles/:_id/edit', {
  name: 'articleEdit',
  data: function() { return Articles.findOne(this.params._id); }
});
Router.route('/articles/:_id', {
  name: 'articleShow',
  data: function() { return Articles.findOne(this.params._id); }
});