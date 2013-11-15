Template.entryItem.helpers({
	timeStamp: function() {
		return moment(new Date(this.submitted)).calendar();
	},
	submittedBy: function() {
	if (this.userId === Meteor.userId()){
			return "Me";
		}else{
			return this.author;
		}
}
});