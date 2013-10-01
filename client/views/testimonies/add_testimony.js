Template.addTestimony.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=body-test]');
    var testimony = {
      body: $body.val(),
      entryId: template.data._id
    };

    Meteor.call('testimony', testimony, function(error, testimonyId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});