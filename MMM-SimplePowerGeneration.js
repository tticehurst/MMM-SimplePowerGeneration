/* eslint-disable */

Module.register("MMM-SimplePowerGeneration", {
  defaults: {
    refreshTime: 5
  },

  __getData() {
    this.sendSocketNotification("get-data");
  },

  start() {
    setTimeout(() => {
      setInterval(() => {
        this.__getData();
      }, this.config.refreshTime * 60000);
      this.__getData();
    }, 1000);
  },

  socketNotificationReceived(id, payload) {
    if (id === "send-data") {
      this.payload = payload;
      this.updateDom(300);
    }
  },

  getTemplateData() {
    return { data: this.payload };
  },

  getTemplate() {
    return "SimplePowerGeneration.njk";
  },

  getStyles() {
    return ["carbon.css"];
  }
});
