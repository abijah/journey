Template.journalLog.helpers({
  entries: function() {
    return Entries.find({}, {sort: {submitted: -1}});
  }
});