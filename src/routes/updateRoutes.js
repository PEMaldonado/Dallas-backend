const { Router } = require("express");

const { update } = require("../handlers/foodHandlers");

const updateRoutes = Router();

updateRoutes.patch("/:id", update);

module.exports = updateRoutes;
