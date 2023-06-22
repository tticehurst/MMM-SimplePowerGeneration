/* eslint-disable */
const NodeHelper = require("node_helper");

const axios = require("axios").default;

module.exports = NodeHelper.create({
	async socketNotificationReceived(notification, payload) {
		if (notification === "get-data") {
			let data = (await axios.get("https://api.carbonintensity.org.uk/generation")).data;
			this.sendSocketNotification("send-data", data);
		}
	}
});
