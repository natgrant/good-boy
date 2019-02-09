const express = require("express");
const db = require("../db/db");
const router = express.Router();
router.use(express.json());

//TODO: add some heckin' routes
router.get("/", (req, res) => {
  db.getDogs()
    .then(dogs => {
      console.log(dogs);
      res.json(dogs);
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

module.exports = router;
