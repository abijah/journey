Template.liveRequest.helpers({
  	domain: function() {
    	var a = document.createElement('a');
   		a.href = this.date;
    	return a.hostname;
    },
	timeStamp: function() {
		return moment(new Date(this.submitted)).fromNow();
	},

	submittedBy: function() {
		if (this.userId === Meteor.userId()){
			return "Me";
		}else{
			return this.author;
		}
}
});