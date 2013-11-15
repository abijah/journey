Template.donatePage.events = {
    'submit form': function(event){
    Stripe.setPublishableKey('pk_wYYU96RVeBvDJBZJhbL6XmN15vQlY');
      event.preventDefault();
      var donateForm = $('#donate-form'); // collects form data
      $('button[type=submit]').attr('disabled', true); // prevent double submits
      Stripe.createToken(donateForm, stripeResponseHandler); // asynchronously called

    function stripeResponseHandler(status, response) {
	    if (response.error) {
	        // show the errors on the form
	        console.log(response.error.message);
	        throwError(response.error.message);
        	clearSeenErrors();
	        //$(".payment-errors").text(response.error.message);
	        $('button[type=submit]').attr('disabled', true);
	    } else {
	    	var cusName = ($('#firstname').val() + " " + $('#lastname').val());
		 	var paymentInfo = {
//				name: cusName, 
//				email: $('#email').val(),
				amount: $('#amount').val()*100, //move adj by 100 to server
				card: response.id,
				description: "donation", //move to server
				currency: "usd" //move to server
		 	}
			Meteor.call('donate', paymentInfo, function(error,id){
				if (error)
					return alert(error.reason);
				Meteor.Router.to('entryLog');

			});
	    }
	} 

	}

}

