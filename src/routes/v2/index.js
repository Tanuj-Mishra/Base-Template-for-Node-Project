const express = require("express");
const router = express.Router();

router.get("/info", (req, res) => {
  res.json({ msg: "hello from version-2 of api" });
});

module.exports = router;
