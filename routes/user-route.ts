import { request, response, Router } from "express";
import UserController from "../src/controllers/UserController"


const router = Router();

const userController = new UserController();


router.get("/", userController.list);

router.get("/add", (request, response) => {
  response.render("add");
});

router.post("/add-user", userController.create);

router.get("/search", userController.search);

router.get("/edit", userController.edit);

router.post("/edit-user", userController.update);

router.post("/delete-user", userController.delete);

export { router };