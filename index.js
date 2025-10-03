const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("msg sent");
});

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, (req, res) => {
  console.log(`server is up, and is listening on: ${ServerConfig.PORT}`);
  Logger.log({
    level: "info",
    label: "root",
    message: "All working fine",
  });
});
