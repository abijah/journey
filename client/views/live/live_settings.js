Template.liveSettings.helpers({


});

Template.liveSettings.events = {

	'submit form': function(event){
    	event.preventDefault();
    	var embedCodeVal = $(event.target).find('#liveEmbed').val();
    				console.log();

    	// id is poorly hardcoded
    	Settings.update({"_id" : "pR44ghYPNdte4yxBs"}, {
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