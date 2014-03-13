Template.livePlayer.rendered = function () {

	Deps.autorun(function () {
		embedObj = Settings.findOne({},{fields:{"embedCode":1, "_id":0}});
	});



	//Object.keys may not work in all browsers consider for loop to extract property value
	if(embedObj !== undefined){
		playerEmbed = Object.keys(embedObj).map(function (key) {
    		return embedObj[key];
    	});
    	$(".live-player").append(playerEmbed);
	}

};
