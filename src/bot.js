
const tweet = require("./twitter.js"),
      later = require("./later.js");

const interval = 1,
      schedule = later.parse.text("every " + interval + " min");
let counter = -interval;

module.exports = class Bot {
    constructor() {
        this.timer = null;
    }
    async start() {
        this.timer = later.setInterval(Bot.handleInterval, schedule);
        await tweet("It's " + Bot.getTimeNowString() + " - Hello World!");
    }
    async stop() {
        this.timer.clear();
        this.timer = null;
        await tweet("It's " + Bot.getTimeNowString() + " - Goodbye World!");
    }
    static async handleInterval() {
        counter += interval;
        await tweet("It's " + Bot.getTimeNowString() + " - I have been alive for " + counter
            + " minutes!");
    }
    static getTimeNowString() {
        const date = new Date();
        return Bot.zeroPad(date.getHours()) + ":" + Bot.zeroPad(date.getMinutes());
    }
    static zeroPad(numberString) {
        return ("0" + numberString).slice(-2);
    }
};
