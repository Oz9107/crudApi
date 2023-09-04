const catchError = require("../utils/catchError");
const Users = require("../models/Users");

//get
const getAll = catchError(async (req, res) => {
  const user = await Users.findAll();
  return res.json(user);
});
//post
const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await Users.create({
    first_name,
    last_name,
    email,
    password,
    birthday,
  });
  return res.status(201).json(user);
});
//GET -> /users/:id
const getOne = catchError(async(req, res) =>{
  const {id} = req.params;
  const user = await Users.findByPk(id);
  return res.status(201).json(user);
})
//delete
const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Users.destroy({ where: { id } });
  return res.sendStatus(204);
});

//update
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;
  const user = await Users.update(
    {
      first_name,
      last_name,
      email,
      password,
      birthday,
    },
    { where: { id }, returning: true }
  );
  return res.json(user);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
