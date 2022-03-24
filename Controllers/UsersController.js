const { find } = require('../Models/User');
const User = require('../Models/User');

exports.CreateUser = async(req, res)=>{
    try {
        let NewUser;
        NewUser = new User(req.body)
        await NewUser.save();
        res.send(NewUser)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
    }

}