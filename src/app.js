const PORT = process.env.PORT || 8080,
      express = require("express"),
      logger = require("morgan"),
      app = express();

require("dotenv").config();

const Bot = require("./bot.js"),
      bot = new Bot();

bot.start();

app.use(logger("tiny"));

app.get("/start", async(req, res) => {
    if (await bot.start()) {
        res.send("Bot started");
    } else {
        res.send("Could not start bot (it may already be running)");
    }
});

app.get("/stop", async(req, res) => {
    if (await bot.stop()) {
        res.send("Bot stopped");
    } else {
        res.send("Could not stop bot (it may already have been stopped)");
    }
});

app.listen(PORT, () => {
    console.info("Server listening on port " + PORT);
});
