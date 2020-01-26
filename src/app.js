const express = require("express"),
      logger = require("morgan");

const PORT = process.env.PORT || 8080,
      app = express();

app.use(logger("tiny"));

app.get("/tweet", async(req, res) => {
    res.send(req.query.value);
});

app.listen(PORT, () => {
    console.info("Server listening on port " + PORT);
});
