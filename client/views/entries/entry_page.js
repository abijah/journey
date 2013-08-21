Template.entryPage.helpers({
  currentEntry: function() {
    return Entries.findOne(Session.get('currentEntryId'));
  },
  comments: function() {
    return Comments.find({entryId: this._id});
  }
});

 Template.entryPage.rendered = function () {
    
  var currentEntryId = Session.get('currentEntryId');

  $('.editable').editable(function(value, setting){ 
     Entries.update(currentEntryId, {$set: {message: (value)}});
      return(value);
    });
}