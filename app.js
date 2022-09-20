const express = require("express");
const pug = require("pug");
const dotenv = require("dotenv").config({ path: "/config.env" });

const app = express();
const port = 3000 || process.PORT;
const accountSid = "AC086255c6a398c96989ce389cbc7c2809";
const authToken = "[AuthToken]";
const client = require("twilio")(accountSid, authToken);

app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("helpMe", async (req, res) => {
  try {
    const message = await client.messages
      .create({
        body: "Ambulance is coming to your location in 3mins",
        messagingServiceSid: "Helper",
        to: "+905338897286",
      })
      .done();
    res.status(200).json({
      status: "success",
      data: { message: message },
    });
  } catch {
    res.status(500).json({
      status: "error",
      message: "An error occurred. Please try again later",
    });
  }
});

app.get("/", async (req, res) => {
  res.render("homepage");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
