/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');

module.exports = {

  attributes: {
      nombres:{
          type:'string',
          minLength:5,
          required:true
      },
      apellidos:{
          type:'string',
          minLength:5,
          required:true
      },
      correo:{
          type:'string',
          email:true,
          defaultsTo:true,
          unique:true
      },
      password:{
          type:'string',
          defaultTo:"123456"
      }
  },
    beforeUpdate:function(values,cb){
        
        if(values.password){
                    
        Passwords.encryptPassword({
password: 'values.password',
}).exec({

error: function (err) {
cb(err) 
},
// OK.
success: function (result) {
 values.password=result;
    cb()
},
});
        }else{
            
        }
           sails.log.info(values);
/*    cb(123123123);
    cb()*/
        //cb("hola");

        
    }
 
};











