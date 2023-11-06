const portfolioRouter = require("express").Router();
const { postPortfolio, fetchPortfolio } = require("../controllers/PortfolioController");

portfolioRouter.post("/Student/Portfolio", postPortfolio);

portfolioRouter.get("/Student/Portfolio", fetchPortfolio);

module.exports = portfolioRouter;
