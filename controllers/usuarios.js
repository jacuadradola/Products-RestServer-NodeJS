
const { response, request } = require('express')

const usuariosGet = (req = request, res = response ) => {

    const { q, nombre } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        nombre
    });
}
const usuariosPost = (req, res = response ) => {

    const body = req.body;
    res.json({
        msg: 'post API - controller',
        body
    });
}
const usuariosPut = (req, res = response ) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - controller',
        id
    });
}
const usuariosPatch = (req, res = response ) => {
    res.json({
        msg: 'patch API - controller'
    });
}
const usuariosDelete = (req, res = response ) => {
    res.json({
        msg: 'delete API - controller'
    });
}

module.exports = { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}