
const tweet = require("./twitter.js"),
      later = require("./later.js");

module.exports = class Bot {
    constructor() {
        this.timer = null;
    }
    async start(silent) {
        if (this.timer === null) {
            this.timer = later.setInterval(Bot.handleInterval, Bot.getSchedule());
            if (!silent) {
                await tweet("It's " + Bot.getTimeNowString() + " - Hello World!");
            }
            return true;
        }
        return false;
    }
    async stop() {
        if (this.timer !== null) {
            this.timer.clear();
            this.timer = null;
            await tweet("It's " + Bot.getTimeNowString() + " - Goodbye World!");
            return true;
        }
        return false;
    }
    static async handleInterval() {
        await tweet(Bot.getTimeNowString() + " make a wish!");
    }
    static getTimeNowString() {
        const date = new Date();
        return Bot.zeroPad(date.getHours()) + ":" + Bot.zeroPad(date.getMinutes());
    }
    static zeroPad(numberString) {
        return ("0" + numberString).slice(-2);
    }
    static getSchedule() {
        return { "schedules": [
            { "h": [ 1 ], "m": [ 23 ] },
            { "h": [ 12 ], "m": [ 34 ] },
            { "h": [ 11 ], "m": [ 11 ] },
            { "h": [ 22 ], "m": [ 22 ] }
        ] };
    }
};
