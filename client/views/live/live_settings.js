Template.liveSettings.events = {

	'submit form': function(event){
    	event.preventDefault();
    	var embedCodeVal = $(event.target).find('#liveEmbed').val();
    	
    	Settings.update({"_id" : "PNzFNbcwtso92bLXY"}, { // id is poorly hardcoded
			$set:{
				embedCode: (embedCodeVal),
			}
		});


    	if($('#embedButton').val() == "offline"){
				return $('#embedButton').val("online")
				.removeClass("btn-danger").addClass("btn-success");
			}else{
				return $('#embedButton').val("offline")
				.removeClass("btn-success").addClass("btn-danger");
			}

		}

};