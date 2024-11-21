const express = require("express");
const {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

const router = express.Router();

router.get("/get", getTodo);
router.post("/create", createTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);
module.exports = router;
