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
                    url: '/Usuario/listarUsuario'
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
                        descripcion: 'Error al editar usuario: ' + error,
                        url: '/Usuario/editarUsuario'
                    }
                });
                return res.view('Usuario/editarUsuario', {
                    title: 'Editar Usuario -' + usuarioEncontrado.nombre,
                    usuarios: usuarioEncontrado
                })
            })
        } else {
            res.view('error', {
                title: 'Error',
                error: {
                    descripcion: 'Error con el ID',
                    url: '/Usuario/editarUsuario'
                }
            });
        }
    },

    crearAgarre: function (req, res) {
        return res.view('Agarre/crearAgarre', {
            title: 'Crear Agarres'
        })
    },
    listarAgarre: function (req, res) {
        Agarre.find().exec(function (error, agarresEncontrados) {
            if (error) return res.view('error', {
                title: 'Error',
                error: {
                    descripcion: 'Error al listar agarre: ' + error,
                    url: '/Agarre/listarAgarre'
                }
            });
            return res.view('Agarre/listarAgarre', {
                title: 'Lista de Agarres',
                agarres: agarresEncontrados
            });
        });


    },
    editarAgarre: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            Agarre.findOne({
                id: parametros.id
            }).exec(function (error, agarreEncontrado) {
                if (error) return res.view('error', {
                    title: 'Error',
                    error: {
                        descripcion: 'Error al editar agarre: ' + error,
                        url: '/Agarre/editarAgarre'
                    }
                });
                return res.view('Agarre/editarAgarre', {
                    title: 'Editar Agarre -' + agarreEncontrado.nombre,
                    agarres: agarreEncontrado
                })
            })
        } else {
            res.view('error', {
                title: 'Error',
                error: {
                    descripcion: 'Error con el ID',
                    url: '/Agarre/editarAgarre'
                }
            });
        }
    },
    error: function (req, res) {
        return res.view('error', {
            title: 'Error',
            error: {
                descripcion: 'Error en el sistema',
                url: '/error'
            }
        });
    }


};