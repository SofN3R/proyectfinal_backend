const User = require("../../Models/User");
const bcrypt = require('bcryptjs');
const { generateJWT } = require("../../helpers/jwt");
const { googleVerify } = require("../../helpers/googleVerify");
// Login User

const login = async( req, res = response ) => {

   const { email, password } = req.body;

   try {

      // validate email
      const userDB = await User.findOne({email});
      if ( !userDB ) {
         return res.status(404).json({
            ok: false,
            msg: 'Email no valido'
         })
      }

      const validatePass = bcrypt.compareSync( password, userDB.password );
      if ( !validatePass ) {
         return res.status(400).json({
            ok: false,
            msg: 'Contraseña no valida'
         });
      }

      // generate Token
      const token = await generateJWT( userDB._id );



      res.json({
         ok: true,
         token
      });


   } catch (error) {

      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Error'
      });

   }


}

// login Google
const logGoogle = async( req, res = response ) => {

   const googleToken = req.body.token;

   try {


      const { name, email } = await googleVerify( googleToken );

      const userDB = await User.findOne({ email });
      let user;

      if( !userDB ) {
         user = new User({
            name: name,
            lastname: '',
            email,
            telephone: 0,
            password: '@@@',
            role: "cliente",
            // img: picture,
            google: true

         });
      } else {
         // existe usuario
         user = userDB ;
         user.google = true;
         // user.google = true;

      }

      // guardar en bd
      await user.save();

      // generar JWT
      const token = await generateJWT( userDB._id );


      res.json({
         ok: true,
         token
      });


   } catch (error) {

      console.log(error);
      res.status(401).json({
         ok: false,
         msg: 'Token no es correcto'
      });

   }


}

// renew token
const renewToken = async (req, res=response) => {

   const uid = req.uid;

   const token = await generateJWT( uid );

   const usLog = await User.findById( uid );
   console.log(usLog);

   res.json({
      ok:true,
      token,
      usLog
   })

}

// method 4 update an user
const updateUsers = async( req, res = response ) => {

   // TODO: Validar token comprobar si es el usuario correcto

   const uid = req.params.id;

   try {

      const usuarioDB = await User.findById( uid );
      if ( !usuarioDB) {
         res.status(404).json({
            ok: false,
            msg: 'No existe un usuario por ese ID'
         });
      }

      // actualizar
      const { password, google, email, ...fields } = req.body;

      if ( usuarioDB.email !== email ) {

         const existsEmail = await User.findOne( { email } )
         if ( existsEmail ) {
            return res.status(400).json({
               ok: false,
               msg: 'Ya existe un usuario con ese email'
            });
         }
      }

      fields.email = email;


      const usUpdate = await User.findByIdAndUpdate( uid, fields, { new: true } );

      res.json({
         ok: true,
         user: usUpdate
      });
   } catch (error) {
      console.log( error );
      res.status(500).json({
         ok: false,
         msg: 'Error inesperado'
      });
   }

}

// method 4 "delete" an user
const deleteUser = async (req, res = response ) => {

   const uid = req.params.id;

   try {

      const userDB = await User.findById( uid );
      if ( !userDB) {
         res.status(404).json({
            ok: false,
            msg: 'No existe un usuario por ese ID'
         });
      }


      const field = req.body.active;


      const usUpdate = await User.findByIdAndUpdate( uid, {active: field}, { new: true } );



      res.json({
         ok: true,
         user: usUpdate
      });


   } catch (error) {

      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Error inesperado'
      });
   }


}



module.exports = {

   updateUsers,
   deleteUser,
   login,
   logGoogle,
   renewToken
}
