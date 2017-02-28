/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crearUsuario:function(req,res){
        var parametros=req.allParams();
        if(req.method=='POST'){
            Usuario.create(
            {
                nombre:parametros.nombre,
                preferencia:parametros.preferencia,
                fechaNacimiento:parametros.fechaNacimiento
            }
            )
            .exec(
            function(error,UsuarioCreado){
                if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al crear usuario: '+error,
                    url:'/crearUsuario'
                }
            });
                res.view('/Usuario/listarUsuario/',{
                    title:'Lista de Usuarios',
                    usuarios: UsuarioCreado
                });
                
            }
            );
        }else{
            return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error en el método HTTP',
                    url:'/crearUsuario'
                }
            })
        }
    },
    listarUsuario:function(req,res){
        
    },
    editarUsuario:function(req,res){
        
    },
    borrarUsuario:function(req,res){
        
    }
};

