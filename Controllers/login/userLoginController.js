  const User = require('../../Models/User');

  const jwt = require('jsonwebtoken');

  exports.newUs = async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = new User({email, password});
      newUser.save();

      const token = jwt.sign({ _id: newUser._id }, 'secretkey');
      res.status(200).json({token});



    } catch (error) {

    }

  }


  exports.userAuth = async(req, res) => {
    try {
      const { email, password } = req.body;
      const userLog = await User.findOne({ email: email});
      // const passDes = cryptr.decrypt(userLog.password);
      // console.log(passDes);
      // console.log(userLog._id);
      if(!userLog) {
        res.status(401).json({"resp": "Este correo electrónico no está registrado!"});
      }
      if(userLog.password !== password){
        res.status(401).json({"resp": "La contraseña es incorrecta"})
      } // else {
      //   res.status(200).json(userLog._id);
      // }

      const token = jwt.sign({ _id: userLog._id }, 'secretkey' );

      return res.status(200).json({token});


    } catch (error) {
      console.log(error);
    }


  }





  exports.tasks = async(req, res) => {
    try {


      res.json([

        {
          _id: 1,
          name:'Task One',
          description: 'Lorem ipsumu',
          date: "2022-03-14"
        },
        {
          _id: 1,
          name:'Task Two',
          description: 'Lorem ipsumu',
          date: "2022-03-14"
        },
        {
          _id: 1,
          name:'Task Three',
          description: 'Lorem ipsumu',
          date: "2022-03-14"
        }

      ])




    } catch (error) {
      console.log(error);
    }


  }
  exports.privTasks = async(req, res) => {
    try {


      res.json([

        {
          _id: 1,
          name:'Task One p',
          description: 'Lorem ipsumu',
          date: "2022-03-14"
        },
        {
          _id: 1,
          name:'Task Two p',
          description: 'Lorem ipsumu',
          date: "2022-03-14"
        },
        {
          _id: 1,
          name:'Task Three p',
          description: 'Lorem ipsumu',
          date: "2022-03-14"
        }

      ])




    } catch (error) {
      console.log(error);
    }


  }


  exports.verifyToken = (req, res, next) => {
    if(!req.headers.authorization){
      return res.status(401).send('No auth');

    }

    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
      return res.status(401).send('No auth');

    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();

  }
