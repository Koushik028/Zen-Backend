const queryRouter = require("express").Router();
const { postQuery, deleteQuery, fetchQuery } = require("../controllers/QueryController");

queryRouter.post("/Student/Query", postQuery);

queryRouter.delete("/Student/Query/:id", deleteQuery);

queryRouter.get("/Student/Query", fetchQuery);

module.exports = queryRouter;
