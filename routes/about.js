const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about", {
    layout: "index",
    title: "About",
  });
});

module.exports = router;
