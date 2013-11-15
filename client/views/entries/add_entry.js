Template.addEntry.events({
  'submit form': function(event) {
    event.preventDefault();

    $('button[type=submit]').attr('disabled', true); // disable button

    var entry = {
      message: $('[name=message]').val(),
      privacy: $('#checkbox').prop('checked'),
    }
    console.log(entry.privacy);
    Meteor.call('entry', entry, function(error, id) {
      if (error){
        throwError(error.reason);
        clearSeenErrors();
        $('button[type=submit]').attr('disabled', false); // reenable button
      }else if(!entry.privacy){
        $('[name=message]').val(""); // find better way to clear form enroute
         Meteor.Router.to('livePage')    
      }else{
        Meteor.Router.to('entryPage', id);
      }
    });
  
  }

});