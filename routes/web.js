import express from "express";
const router=express.Router()

import userController from "../controller/userController.js";

// router.get('/',studentController.retrieveDoc)
// router.post('/',studentController.createDoc)
// router.get('/edit/:id',studentController.updateDoc)
// router.post('/update/:id',studentController.updateDocById)
// router.post('/delete/:id',studentController.deleteDocById)

router.get('/',userController.home);
router.get("/login",userController.login)
router.post("/login",userController.validateLogin)
router.get("/register",userController.register)
router.post("/register",userController.createUserDoc)


export default router