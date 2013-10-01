Template.entryLog.helpers({
  entries: function() {
  	var user = Meteor.user();
    return Entries.find({userId: user._id}, {sort: {submitted: -1}});
    }
});