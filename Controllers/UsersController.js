const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


// Create new User
exports.CreateUser = async(req, res,)=>{
      try {
         let NewUser;
         NewUser = new User(req.body)
         NewUser.password = bcrypt.hashSync(NewUser.password);
         await NewUser.save();
         const expiresIn = 24 * 60 * 60;
         const accessToken = jwt.sign({id: NewUser.id},
               process.env.JWT_SECRET,{
                  expiresIn : expiresIn
               });
               const responseuser ={
                  name: NewUser.name,
                  lastname : NewUser.lastname,
                  email : NewUser.email,
                  password : NewUser.password,
                  accessToken : accessToken,
                  expiresIn : expiresIn
               }
               res.send(responseuser);


      } catch (error) {
         console.error(error);
         res.status(500).send("Error 500")
      }

}

// Get all users
exports.VisualizerUsers = async(req, res)=>{
      try {
         const get_users = await User.find();
         res.json(get_users)
      } catch (error) {
         console.error(error);
         res.status(500).send("Error 500");
      }
}

