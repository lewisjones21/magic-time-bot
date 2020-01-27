const PORT = process.env.PORT || 8080,
      express = require("express"),
      logger = require("morgan"),
      app = express();

require("dotenv").config();

app.use(logger("tiny"));

app.get("/tweet", async(req, res) => {
    const tweet = require("./twitter.js");
    await tweet(req.query.value);
    res.send("Tried to tweet: " + req.query.value);
});

app.listen(PORT, () => {
    console.info("Server listening on port " + PORT);
});
