const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/users.controllers");
const express = require("express");

const userRouter = express.Router();

userRouter.route("/").get(getAll).post(create);

userRouter.route("/:id").get(getOne).delete(remove).patch(update);

module.exports = userRouter;
