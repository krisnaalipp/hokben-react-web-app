const CategoryController = require("../controllers/categoryController");
const authentication = require("../middlewares/authentication");

const router = require("express").Router();

router.get("/", CategoryController.getCategory);
router.use(authentication);
router.post("/", CategoryController.addCategory);
router.get("/:categoryId", CategoryController.getCategoryById);
router.put("/:categoryId", CategoryController.editCategory);
router.delete("/:categoryId", CategoryController.deleteCategory);

module.exports = router;
