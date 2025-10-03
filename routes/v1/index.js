const express = require("express");
const router = express.Router();
const infoController = require("../../controllers/info-controller");

console.log("ab hoga kaam");

router.get("/", (req, res) => {
  return res.json({ msg: "more okays" });
});

router.get("/info", infoController.info);

module.exports = router;
