Template.addEntry.events({
  'submit form': function(event) {
    event.preventDefault();

     var entry = {
      message: $(event.target).find('[name=message]').val(),
      status: 'unread',
      privacy: $(event.target).find('#checkbox').prop('checked'),
    }

    Meteor.call('entry', entry, function(error, id) {
      if (error)
        return alert(error.reason);

    $(event.target).closest('form').find("input[type=text], textarea").val(""); //clear form

    Meteor.Router.to('entryLog', entry);
  
    });
  }

});