import express from "express";
import ClassesController from "./controllers/ClassesController";

const routes = express.Router();
const ClassesControllers = new ClassesController();

// Creating route to /users resource with a GET and POST request
routes.post("/classes", ClassesControllers.create);
routes.get("/classes", ClassesControllers.index);

export default routes;
