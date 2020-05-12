const { Router } = require("express");
const {
  getTasks,
  saveTask,
  updateTask,
} = require("../controllers/taskController");

const router = Router();

router.get("/", getTasks);
router.post("/", saveTask);
router.put("/", updateTask);

module.exports = router;
