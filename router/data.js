const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
const collection = db.collection("tariff_data");

router.get("/datas", async function (req, res, next) {
  try {
    const docs = await collection.find({}).toArray();
    res.json(docs);
  } catch (err) {
    return next(err);
  }
});

router.get("/data/:hs_code", async function (req, res, next) {
  try {
    const data = await collection.findOne({ HS_code: req.params.hs_code });
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
