const express = require("express");
const router = express.Router();

router.use("/user", (req, res, next) => {
  if (req.body.title !== "") {
    console.log(req.body.title);
  } else {
    console.log("oopsy: ", req.body.title);
  }
});

router.get("/", (req, res) => {
  res.render("about", {
    layout: "index",
    title: "About",
    person: "",
  });
});

router.get("/:person", (req, res) => {
  res.render("about", {
    layout: "index",
    title: "About",
    person: req.params.person.toUpperCase(),
  });
});

router.post("/user", (req, res) => {
  res.json({
    name: "Hannes",
  });
});

module.exports = router;
