Template.entryItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.date;
    return a.hostname;
  },

	timeStamp: function() {
		return new Date(this.submitted).toLocaleString();
	}

});