import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const ClassesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

// Creating route to /users resource with a GET and POST request
routes.post("/classes", ClassesControllers.create);
routes.get("/classes", ClassesControllers.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
