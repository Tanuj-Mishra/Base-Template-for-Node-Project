const express = require("express");
const v1Routes = require("./v1");
const router = express.Router();

console.log("reached routes");

router.get("/", (req, res) => {
  return res.json({ msg: "okays" });
});

router.use("/v1", v1Routes);

module.exports = router;
