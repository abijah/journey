Template.addEntry.events({
  'submit form': function(event) {
    event.preventDefault();
//    var user = Meteor.user();

     var entry = {
      message: $(event.target).find('[name=message]').val(),
      status: 'unread',
//      userId: user._id, 
//      author: user.username, 
//      submitted: new Date().getTime()
    }
    
//    entry._id = Entries.insert(entry);

    Meteor.call('entry', entry, function(error, id) {
      if (error)
        return alert(error.reason);

    Meteor.Router.to('journalLog', entry);

    $(event.target).closest('form').find("input[type=text], textarea").val(""); //clear form
  
    });
  }
});