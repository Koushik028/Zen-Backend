const webcodeRouter = require("express").Router();
const { postWebcode, fetchWebcode } = require("../controllers/WebcodeController");

webcodeRouter.post("/Student/Webcode", postWebcode);

webcodeRouter.get("/Student/getwebcode", fetchWebcode);

module.exports = webcodeRouter;
