const express = require("express");
const router = express.Router();
const infoController = require("../../controllers/info-controller");

router.get("/getinfo", (req, res) => {
  return res.json({ msg: "okays ha ha ha" });
});

router.get("/info", infoController.info);

module.exports = router;
