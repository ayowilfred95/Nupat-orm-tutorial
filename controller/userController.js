const bcrypt = require("bcrypt")
const User = require('../model/userModel')
const jwt = require("jsonwebtoken")
const sequelize =  require("../config/database")

const {JWT_SEC} =process.env

const signupUser = async (req,res) =>{
    try {
        await sequelize.sync();

        const{firstName,lastName,email,password} = req.body;
       // let hash the password first
       const hashedPassword = await bcrypt.hash(password,10);

       // let check if the password hashed successfully
       if (hashedPassword) {
        const user = await User.create({
          firstName: firstName,
          lastName:lastName,
          email: email,
          password: hashedPassword,
        });
        
        // let return the status
        res.status(201).json({
          status: "success",
          data: user,
        });
      }

    } catch (error) {
        res.status(401).json({message:"Failed!"})

    }
}

const loginUser= async(req,res)=>{
    try{
        await sequelize.sync()
        // request body
        const {email,password} = req.body
        // let check if email didnt exist
        const existingUser = await User.findOne({
            where:{email:email}
        })

        // let do some checking
        if(!existingUser){
         return res.status(400).json({
                message:"User not found,please create an account"
            })
        }
         // If the email exists, you can proceed with password validation (e.g., comparing the hashed password with the input password)
        const isPasswordValid =await bcrypt.compare(password,existingUser.password)
        const accessToken = jwt.sign(
            {
              id: existingUser.id,
              email: existingUser.email
            },
            JWT_SEC,
            { expiresIn: "1d" }
          );
          res.status(200).json({
            status:"Success",
            data:existingUser,
            token:accessToken
          })

    }catch(error){
        res.status(401).json({
            message:"Failed to login user"
        })
    }

}

module.exports ={signupUser,loginUser}
