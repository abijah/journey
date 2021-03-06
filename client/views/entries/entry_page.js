Template.entryPage.helpers({
  currentEntry: function() {
    return Entries.findOne(Session.get('currentEntryId'));
  },
  comments: function() {
    return Comments.find({entryId: this._id});
  },
  testimonies: function() {
    return Testimonies.find({entryId: this._id});
  }

});
/*
Template.entryPage.events({
  'click #testimony': function(event) {
    event.preventDefault();
    $(this).tab('show');  
  },
  'click #comment': function(event) {
    event.preventDefault();
    $(this).tab('show');
  }
});
*/

 Template.entryPage.rendered = function () {
  var currentEntryId = Session.get('currentEntryId');

  $('.editable').editable(function(value, setting){ 
     Entries.update(currentEntryId, {$set: {message: (value)}});
      return(value);
    }, {
    type: 'textarea',  
    submit: 'OK',
    tooltip: 'click to edit',
  });
  
  $('#right-triangle').hide();
}

