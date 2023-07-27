const router = require("express").Router();
const userRouter = require("./user");
const itemRouter = require("./item");
const categoryRouter = require("./category");
const ingredientRouter = require("./ingredient");
const errorHandler = require("../middlewares/errorHandler");

router.use("/users", userRouter);
router.use("/items", itemRouter);
router.use("/categories", categoryRouter);
router.use("/ingredients", ingredientRouter);
router.use(errorHandler);

module.exports = router;
