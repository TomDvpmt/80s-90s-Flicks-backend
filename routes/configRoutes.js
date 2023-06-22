const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
    initializeAPI,
    getImgBBAPIKey,
    getDemoUserId,
} = require("../controllers/configCtrl");

router.get("/initialize", initializeAPI);
router.get("/imgbb-api-key", auth, getImgBBAPIKey);
router.get("/demo-user-id", auth, getDemoUserId);

module.exports = router;
