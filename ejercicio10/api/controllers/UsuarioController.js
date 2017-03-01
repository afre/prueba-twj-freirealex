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
              Usuario.find().exec(function (error,usuariosEncontrados){
                                  if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al buscar usuarios creados: '+error,
                    url:'/listarUsuario'
                }
            });
                   return res.view('Usuario/listarUsuario',{
                    title:'Lista de Usuarios',
                    usuarios: usuariosEncontrados
                });
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
    
    editarUsuario:function(req,res){
        var parametros=req.allParams();
        if(req.method=='POST'){
            Usuario.update({
                id:parametros.id
            },{
                nombre:parametros.nombre,
                preferencia:parametros.preferencia,
                fechaNacimiento:parametros.fechaNacimiento
            }).exec(function(error,usuarioCreado){
                if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al actualizar datos: '+error
                    
                }
            });
               Usuario.find().exec(function(error,usuariosEncontrados){
 if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al buscar usuarios creados: '+error,
                    url:'/listarUsuario'
                }
            });
                   return res.view('Usuario/listarUsuario',{
                    title:'Lista de Usuarios',
                    usuarios: usuariosEncontrados
                });                  
                   
                   
               }); 
            })
        }else{
                       return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error en el método HTTP'
                    
                }
            }) 
        }
    },
    borrarUsuario:function(req,res){
        var parametros=req.allParams();
        Usuario.find(parametros.id,function(error,usuariosEncontrados){
            if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al buscar usuarios: '+error,
                    url:'/listarUsuario'
                }
            });
            Usuario.destroy(parametros.id,function(error){
                            if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al eliminar usuario '+error,
                    url:'/listarUsuario'
                }
            });
                return res.view('homepage');
            })
        })
    }
};

