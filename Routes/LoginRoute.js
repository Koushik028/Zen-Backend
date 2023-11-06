const loginRouter = require("express").Router();
const { login } = require("../controllers/LoginController");

loginRouter.post("/Student/Login", login);

module.exports = loginRouter;
