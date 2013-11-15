var stripe = StripeAPI('YG6y6iHFtE3eukvq1QgsSeGnt0bAnqkG');

Meteor.methods({
	donate: function(paymentInfo){

		stripe.charges.create(paymentInfo);
	}
});
