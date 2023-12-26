import express from "express";
import { deleteUser, getAllUsers, searchByAgeAndLetter, searchByAgeInRange, searchById, signIn, singUp, topThreeAges, updateUser } from "./controller/user.controller.js";

const router = express.Router()




//get all data
router.get("/user", getAllUsers);
  
  //sign up
  
  router.post("/userSignUp", singUp);
  
  //sign in
  
  router.get("/userSignIn", signIn);
  
  //delete
  
  router.delete("/user", deleteUser);
  
  // update name by id
  router.put("/user",updateUser);
  
  //search age <30 and name start with a 
  router.get("/userAgeAndLetter", searchByAgeAndLetter);
   
  
  
  // search age between 20 and 30
  
  router.get("/userBetween", searchByAgeInRange);
  
  
  
  
    // top 3 ages
  
    router.get("/userTopThree", topThreeAges);
  


    // search by id


    router.get("/userSearchById/:id", searchById);









export default router