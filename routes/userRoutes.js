const express = require("express");
const router = express.Router();
const {
    login,
    getToken,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    logout,
} = require("../controllers/userCtrl");
const { auth } = require("../middleware/auth");

router.post("/login", login);
router.get("/token", getToken);
router.get("/profile", auth, getOneUser);
router.post("/", createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.get("/logout", logout);

module.exports = router;
