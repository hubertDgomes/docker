import e from "express";
import user from "../controllers/user.controller.js";
const router = e.Router()

router.post("/post" , user.userController)
router.get("/get" , user.getUser)

export default router