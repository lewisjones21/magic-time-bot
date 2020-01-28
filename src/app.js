const PORT = process.env.PORT || 8080,
      express = require("express"),
      logger = require("morgan"),
      app = express();

require("dotenv").config();

const Bot = require("./bot.js"),
      bot = new Bot();

bot.start();

app.use(logger("tiny"));

app.get("/start", async() => {
    await bot.start();
});

app.get("/stop", async() => {
    await bot.stop();
});

app.listen(PORT, () => {
    console.info("Server listening on port " + PORT);
});
