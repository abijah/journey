Template.entryItem.helpers({
  	domain: function() {
    	var a = document.createElement('a');
   		a.href = this.date;
    	return a.hostname;
    },
	timeStamp: function() {
		return moment(new Date(this.submitted)).calendar();
	}
/*	timeStamp: function() {
		return new Date(this.submitted).toLocaleString();
	}
*/
});