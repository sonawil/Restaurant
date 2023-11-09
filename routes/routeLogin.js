import { Router } from "express";

const router = Router()

//Importer les controllers
import { login } from "../authentification/loginController.js";

router.post('/', login)

export default router