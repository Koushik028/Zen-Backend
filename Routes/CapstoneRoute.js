const capstoneRouter = require("express").Router();
const { fetchCapstone, postCapstone } = require("../controllers/CapstoneController");

capstoneRouter.get("/Student/Capstone", fetchCapstone);

capstoneRouter.post("/Student/Capstone", postCapstone);

module.exports = capstoneRouter;
