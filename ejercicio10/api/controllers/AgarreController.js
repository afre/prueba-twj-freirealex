/**
 * AgarreController
 *
 * @description :: Server-side logic for managing Agarres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		crearAgarre:function(req,res){
        var parametros=req.allParams();
        if(req.method=='POST'){
            Agarre.create(
            {
                nombre:parametros.nombre,
                veces:parametros.veces,
                dineroGastado:parametros.dineroGastado,
                idUsuario:parametros.idUsuario
            }
            )
            .exec(
            function(error,AgarreCreado){
                if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al crear agarre: '+error,
                    url:'/crearAgarre'
                }
            });
              Agarre.find().exec(function (error,agarresEncontrados){
                                  if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al buscar agarres creados: '+error,
                    url:'/listarAgarre'
                }
            });
                   return res.view('Agarre/listarAgarre',{
                    title:'Lista de Agarres',
                    agarres: agarresEncontrados
                });
              }); 
                
            }
            );
        }else{
            return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error en el método HTTP',
                    url:'/crearAgarre'
                }
            })
        }
    },
    
    editarAgarre:function(req,res){
        var parametros=req.allParams();
        if(req.method=='POST'){
            Agarre.update({
                id:parametros.id
            },{
                 nombre:parametros.nombre,
                veces:parametros.veces,
                dineroGastado:parametros.dineroGastado,
                idUsuario:parametros.idUsuario
            }).exec(function(error,agarreCreado){
                if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al actualizar datos: '+error
                    
                }
            });
               Agarre.find().exec(function(error,agarresEncontrados){
 if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al buscar agarres creados: '+error,
                    url:'/listarAgarre'
                }
            });
                   return res.view('Agarre/listarAgarre',{
                    title:'Lista de Agarres',
                    agarres: agarresEncontrados
                });                  
                   
                   
               }) 
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
    borrarAgarre:function(req,res){
        var parametros=req.allParams();
        Agarre.find(parametros.id,function(error,agarresEncontrados){
            if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al buscar agarres: '+error,
                    url:'/listarAgarre'
                }
            });
            Agarre.destroy(parametros.id,function(error){
                            if(error) return res.view('error',{
                title:'Error',
                error:{
                    descripcion:'Error al eliminar agarre '+error,
                    url:'/listarAgarre'
                }
            });
                return res.view('homepage');
            })
        })
    }
};

