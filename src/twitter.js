const Twit = require("twit");

const twitterConnection = new Twit({
    "consumer_key": process.env.TWITTER_CONSUMER_KEY,
    "consumer_secret": process.env.TWITTER_CONSUMER_SECRET,
    "access_token": process.env.TWITTER_ACCESS_TOKEN,
    "access_token_secret": process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = async function tweet(bodyText) {
    console.log("Attempting to tweet: '" + bodyText + "'...");
    try {
        await twitterConnection.post("statuses/update", {
            "status": bodyText.slice(0, 288)
        });
        console.info("Sent tweet successfully");
    } catch (err) {
        console.error("Failed to send tweet", err);
    }
};
