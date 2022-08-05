

const validaCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');
const validaRoles = require('./validar-roles');
const initialSetup = require('./initial-setup');
const validarArchivo = require('./validar-archivo');

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validaRoles,
    ...initialSetup,
    ...validarArchivo
}