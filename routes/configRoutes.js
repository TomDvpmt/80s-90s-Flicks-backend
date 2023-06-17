const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { getImgBBAPIKey } = require("../controllers/configCtrl");

router.get("/imgbb-api-key", auth, getImgBBAPIKey);

module.exports = router;
