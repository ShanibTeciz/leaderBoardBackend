const express = require('express');
const { fetchUsers, addUsers, updateUser, deleteUsers, updatePoints} = require('../controllers/userController');

const router = express.Router();

router.get("/",fetchUsers)
router.post("/",addUsers)
router.delete("/:_id",deleteUsers)
router.put("/:userId",updateUser)
router.patch("/:userId/:points",updatePoints)
// router.post("/signup",signup);
// router.post("/login",login);
// router.route("/:userID").patch(protect,updateUser).delete(protect,isAdmin,deleteUser)
// router.patch("/ChangePassword/:_id/:password",protect,changePassword);
// router.get("/checkRole/:_id",checkRole)
// router.get("/find/:userId",findUser);
// router.post("/forgot-password",forgotPassword);
// router.post("/reset-password/:resetToken",resetPassword)

module.exports = router