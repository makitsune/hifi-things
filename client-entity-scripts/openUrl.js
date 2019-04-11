/*
{
	"url": "https://google.com"
}
*/

(function() {
	this.entityID;

	this.preload = function(_entityID) {
		this.entityID = _entityID;
	}

	this.openUrl = function() {
		var entity = Entities.getEntityProperties(this.entityID, ["userData"]);
		console.log(entity.userData)
		try {
			var userData = JSON.parse(entity.userData);
		} catch(err) { return; }
		console.log(userData)

		if (userData.url!=undefined) Window.openUrl(userData.url);
	}

	this.startNearTrigger = function() { this.openUrl() }
	this.clickDownOnEntity = function() { this.openUrl() }
})