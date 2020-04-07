import Todo from "../models/todos.server.model";

export const getTodos = async (req, res) => {
  const todos = await Todo.find({});
  try {
    res.status(200).send(todos);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const addTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo
    .save()
    .then(() => {
      res.status(201).send(newTodo);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

export const updateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body);
    await Todo.save();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getTodo = async (req, res) => {
  await Todo.findById(req.params.id)
    .then(todo => {
      if (todo) {
        res.status(200).send(todo);
      } else {
        res.status(404).send("No item found!");
      }
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id);

    if (!todo) {
      res.status.status(404).send("Item not found!");
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
};
