const Todo = require("../models/schema");

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: "todo not created ", error });
  }
};

const createTodo = async (req, res) => {
  console.log(req.body);
  const { task, description, completed } = req.body;
  try {
    const create = await Todo.create({ task, description, completed });
    return res.status(201).json(create);
  } catch (error) {
    res.status(400).json({ message: "todo not created ", error });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { task, description, completed } = req.body;
  try {
    const update = await Todo.findByIdAndUpdate(id, {
      task,
      description,
      completed,
    });
    if (!update) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(201).json(update);
  } catch (error) {
    console.log(error);
  }
};
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletetodos = await Todo.findByIdAndDelete(id);
    if (!deletetodos) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res
      .status(201)
      .json({ meaasge: "successfully delted", deletetodos });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };
