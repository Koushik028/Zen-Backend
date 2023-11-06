const taskRouter = require("express").Router();
const { postTask, fetchTask } = require("../controllers/TaskController");

taskRouter.post("/Student/Task", postTask);

taskRouter.get("/Student/alltask", fetchTask);

module.exports = taskRouter;
