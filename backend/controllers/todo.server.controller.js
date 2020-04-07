import todoModel from "../models/todo.mongo.model";

export const getTodos = async (req, res) => {
  const todos = await todoModel.find({});
  try {
    res.status(200).send(todos);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const addTodo = async (req, res) => {
  const newTodo = new todoModel(req.body);
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
    await todoModel.findByIdAndUpdate(req.params.id, req.body);
    await todoModel.save();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getTodo = async (req, res) => {
  await todoModel
    .findById(req.params.id)
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
    const todo = await todoModel.findByIdAndRemove(req.params.id);

    if (!todo) {
      res.status.status(404).send("Item not found!");
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).send();
  }
};
