Template.comment.helpers({
  submittedOn: function() {
    return new Date(this.submitted).toString();
  }
});