const { find } = require('../Models/Users');
const User = require('../Models/Users');

exports.CreateUser = async(req, res)=>{
    try {
        let User;
        User = new Tourism_plan(req.body)
        await User.save();
        res.send(User)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
    }

}