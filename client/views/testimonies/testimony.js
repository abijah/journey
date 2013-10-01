Template.testimony.helpers({
  submittedOn: function() {
    return new Date(this.submitted).toString();
  }
});

Template.testimony.events({
	'click .glyphicon-remove': function(event){
		event.preventDefault();

		if(confirm("are you sure you want to delete this testimony?")) {
			Testimonies.remove(this._id);

		}
	}


});