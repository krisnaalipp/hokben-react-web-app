const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.post("/login", UserController.login);
router.use(authentication);
router.post("/register", UserController.register);

module.exports = router;
