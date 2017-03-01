/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    home: function (req, res) {
        return res.view('homepage', {
            title: 'Inicio'
        });
    },
    crearUsuario: function (req, res) {
        return res.view('Usuario/crearUsuario', {
            title: 'Crear Usuarios'
        })
    },
    listarUsuario: function (req, res) {
        Usuario.find().exec(function (error, usuariosEncontrados) {
            if (error) return res.view('error', {
                title: 'Error',
                error: {
                    descripcion: 'Error al listar usuario: ' + error,
                    url: '/listarUsuario'
                }
            });
            return res.view('Usuario/listarUsuario', {
                title: 'Lista de Usuarios',
                usuarios: usuariosEncontrados
            });
        });

    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Usuario.findOne({
                id: parametros.id
            }).exec(function (error, usuarioEncontrado) {
                if (error) return res.view('error', {
                    title: 'Error',
                    error: {
                        descripcion: 'Error al editar usuario: ' + error
                    }
                });
                return res.view('Usuario/editarUsuario', {
                    title: 'Editar Usuario -' + usuarioEncontrado.nombre,
                    usuarios: usuarioEncontrado
                })
            });
        } else {
            res.view('error', {
                title: 'Error',
                error: {
                    descripcion: 'Error con el ID'
                }
            });
        }
    },

    crearAgarre: function (req, res) {
        Usuario.find().exec(function(error,usuariosEncontrados){
            if (error) return res.view('error', {
                    title: 'Error',
                    error: {
                        descripcion: 'Error al encontrar usuarios: ' + error
                    }
                });
        return res.view('Agarre/crearAgarre', {
            title: 'Crear Agarres',
            usuarios:usuariosEncontrados
        });
        })
        
    },
    listarAgarre: function (req, res) {
        Agarre.find().exec(function (error, agarresEncontrados) {
            if (error) return res.view('error', {
                title: 'Error',
                error: {
                    descripcion: 'Error al listar agarre: ' + error,
                    url: '/listarAgarre'
                }
            });
            return res.view('Agarre/listarAgarre', {
                title: 'Lista de Agarres',
                agarres: agarresEncontrados
            });
        });


    },
    editarAgarre: function (req, res) {
        Usuario.find().exec(function(error,usuariosEncontrados){
            if (error) return res.view('error', {
                    title: 'Error',
                    error: {
                        descripcion: 'Error al encontrar usuarios: ' + error
                    }
                });
                    var parametros = req.allParams();
        if (parametros.id) {
            Agarre.findOne({
                id: parametros.id
            }).exec(function (error, agarreEncontrado) {
                if (error) return res.view('error', {
                    title: 'Error',
                    error: {
                        descripcion: 'Error al editar agarre: ' + error
                    }
                });
                return res.view('Agarre/editarAgarre', {
                    title: 'Editar Agarre -' + agarreEncontrado.nombre,
                    usuarios: usuariosEncontrados,
                    agarres:agarreEncontrado
                });
            })
        } else {
            res.view('error', {
                title: 'Error',
                error: {
                    descripcion: 'Error con el ID'
                }
            });
        }
        })

    },
    error: function (req, res) {
        return res.view('error', {
            title: 'Error',
            error: {
                descripcion: 'Error en el sistema'
            }
        });
    }


};