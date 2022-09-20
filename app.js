const express = require("express");
const pug = require("pug");
const path = require("path");
const dotenv = require("dotenv").config({ path: "./config.env" });

const app = express();
const port = 3000 || process.env.PORT;
const client = require("twilio")(process.env.ACCOUNTSID, process.env.AUTHTOKEN);

app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/helpMe", async (req, res) => {
  try {
    const message = await client.messages
      .create({
        body: "We got your request. Emergency Helper is coming to your location in 3mins",
        from: "+13024054507",
        to: "+905338897286",
      })
      .done();
    res.status(200).json({
      status: "success",
      data: { message },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "An error occurred. Please try again later",
      err,
    });
  }
});

app.get("/", async (req, res) => {
  res.render("homepage");
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  // console.log(`Shutting down - ${err.message}`);
  // server.close(() => {
  //   console.log("restarting server");
  // });
});
// +13024054507
// +13024054507
