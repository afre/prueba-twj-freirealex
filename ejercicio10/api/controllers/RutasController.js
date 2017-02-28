/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
home:function(req,res){
    return res.view('homepage',{
        title:'Inicio'
    });
},
    crearUsuario:function(req,res){
        return res.view('Usuario/crearUsuario',{
            title:'Crear Usuarios'
        })
    },
    listarUsuario:function(req,res){
        Usuario.find().exec(function(error,usuariosEncontrados){
            if(error)return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al listar usuario: '+error,
                    url:'/listarUsuario'
                }
            });
        return res.view('Usuario/listarUsuario',{
            title:'Lista de Usuarios',
            usuarios:usuariosEncontrados
        });
        });
        
    },
    editarUsuario:function(req,res){
        var parametros=req.allParams();
        if(parametros.id){
            Usuario.findOne({
                id:parametros.id
            }).exec(function(error,usuarioEncontrado){
                if(error)return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al editar usuario: '+error,
                    url:'/editarUsuario'
                }
            });
                return res.view('Usuario/editarUsuario',{
                    title: 'Editar Usuario -'+usuarioEncontrado.nombre,
                    usuarios: usuarioEncontrado
                })
            })
        }else{
            res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error con el ID',
                    url:'/editarUsuario'
                }
            });
        }
    },
    
    crearAgarre:function(req,res){},
    listarAgarre:function(req,res){},
    editarAgarre:function(req,res){},
    
    
};

