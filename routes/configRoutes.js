const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { initializeAPI, getImgBBAPIKey } = require("../controllers/configCtrl");

router.get("/initialize", initializeAPI);
router.get("/imgbb-api-key", auth, getImgBBAPIKey);

module.exports = router;
