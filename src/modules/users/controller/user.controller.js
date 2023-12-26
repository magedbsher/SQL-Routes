import { Op } from "sequelize";
import { userSchema } from "../../../../database/models/user.model.js";




export const  getAllUsers = async (req, res) => {
    let data = await userSchema.findAll();
    res.json({ message: "done", data });
  }



  export const singUp = async (req, res) => {
    let { name, email, password, age } = req.body;
    let data = await userSchema.create({ name, email, password, age });
    res.json({ message: "done", data });
  }


  export const signIn = async (req, res) => {
    let { email, password } = req.body;
    let data = await userSchema.findOne({ where: { email,password} });
    res.json({ message: "done", data });
  } 


  export const deleteUser = async (req, res) => {
    let { id } = req.body;
    let data = await userSchema.destroy({ where: { id } });
    res.json({ message: "done", data });
  }



  export const updateUser =  async (req, res) => {
    let { id, name } = req.body;
  
    let data = await userSchema.update(
      { name },
      {
        where: {
          id,
        },
      }
    );
    if (data[0]) {
      res.json({ message: "updated", data });
    } else {
      res.json({ message: "not found", data });
    }
  }



  export const searchByAgeAndLetter = async (req, res) => {
    let { name, age } = req.body;
    let data = await userSchema.findAll({ where:{ [Op.and]:[{age: { [Op.lte]: "30"}},{ name:{[Op.startsWith]:"a"}} ,
   ]
         }
   });
   if (data[0]){  res.json({ message: "done", data });
  }else{res.json({ message: "not found", data })}
  }



  export const searchByAgeInRange = async (req, res) => {
    let {  age } = req.body;
    let data = await userSchema.findAll({ where:{
       age: { [Op.between]: [20,30] } }
   });
   if (data[0]){  res.json({ message: "done", data });
  }else{res.json({ message: "not found", data })}
  }



  export const topThreeAges = async (req, res) => {
    let {  age } = req.body;
    let data = await userSchema.findAll({ 
        limit: 3 ,
        order: [['age', 'DESC']]
    });
   if (data[0]){  res.json({ message: "done", data });
  }else{res.json({ message: "not found", data })}
  }



  export const searchById = async (req, res) => {
    let { id } = req.params;
    let data = await userSchema.findAll({ where: { id } });
    res.json({ message: "done", data });
    console.log(data);
  }