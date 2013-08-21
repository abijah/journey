
Template.requestsList.helpers({
  requests: function() {
    return Entries.find({status: 'unread'}, {sort: {submitted: +1}});
  }
});
// add 'if admin' code here to be able to delete and add comment to prayer requests from the live page