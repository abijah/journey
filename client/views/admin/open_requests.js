Template.openRequests.helpers({
  requests: function() {
    return Entries.find({status: 'unread'}, {sort: {submitted: +1}});
  }
});

Template.openRequests.events({

	'click .glyphicon-remove': function(event){
		event.preventDefault();
			Entries.update(this._id, {
			$set:{
				status: 'read',
			}

		});


	}


});