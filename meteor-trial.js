Articles = new Mongo.Collection("articles");

if (Meteor.isClient) {

//Adding
  Template.articleNew.events({
    "submit .new-article": function (e) {
      e.preventDefault();

    var articleAttr = {
        title: $(e.target).find('[name=title]').val(),
        content: $(e.target).find('[name=content]').val(),
        type: $(e.target).find('[name=type]').val(),
        expiresOn: $(e.target).find('[name=expiresOn]').val
    };

    Articles.insert(articleAttr, function(error, _id) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('articleIndex');
      }
      return false;
      });
    }
  });
  
  //Index
  Template.articleTable.helpers({
    articles: function() {
      return Articles.find({}, {sort: {title: 1}});
    }
  });


  //Delete
  Template.articleRow.events({
    "click .delete": function (e) {
      e.preventDefault();
    
    Articles.remove(this._id, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('articleIndex');
      }
    });
   }
  });


  //Update
  Template.articleEditForm.events({
    "submit form": function (e) {
      e.preventDefault();

      var _id = this._id;

      var articleAttr = {
        title: $(e.target).find('[name=title]').val(),
        content: $(e.target).find('[name=content]').val(),
        type: $(e.target).find('[name=type]').val(),
        expiresOn: $(e.target).find('[name=expiresOn]').val()
      }

      Articles.update(_id, {$set: articleAttr}, function(error) {
        if (error) {
          alert(error.reason);
        } else {
          Router.go('articleShow', {_id:_id});
        }
      });
    },
    
    "click .delete": function () {
      Articles.remove(this._id);
  }
});


};



 // Template.hello.events({
   // 'click button': function () {
      // increment the counter when button is clicked
    //  Session.set('counter', Session.get('counter') + 1);
   // }
//}

//if (Meteor.isServer) {
  //Meteor.startup(function () {
    // code to run on server at startup
  //});
//}
