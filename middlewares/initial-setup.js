const bcryptjs = require('bcryptjs');
const { response } = require('express');
 
const Rol = require('../models/role');
const Usuario = require('../models/usuario');
 
const crearRoles = async() => {
 
    try {        
 
        // Contar roles en DB
        const existenRoles = await Rol.countDocuments();
 
        // Verificar si existen roles
        if ( existenRoles > 0 ){
            return console.log(`2 - Existen ${ existenRoles } roles en la DB`);
        };
 
        // Crear roles en caso que no existan
        await Promise.all([
            new Rol({ rol: 'USER_ROLE' }).save(),
            new Rol({ rol: 'ADMIN_ROLE' }).save(),
        ]);
        
        console.log(`2 - Se registraron a la DB: "ADMIN_ROLE" and "USER_ROLE"`);
 
    } catch (error) { 
        console.log('2 - Error al validar los roles: ', error); 
    }
 
};
 
const crearAdmin = async() => {    
    
    try {

        // Verificar que exista un usuario administrador
        const existeAdmin = await Usuario.findOne({ correo: 'admin@localhost.com' });
           
        // Si no existe administrador, crearlo
        if ( !existeAdmin ) {
            
            // Encriptar password
            const salt = bcryptjs.genSaltSync();
            const password = bcryptjs.hashSync('admin', salt);
            
            // Crear usuario administrador
            await Usuario.create({
                nombre: 'admin',
                correo: 'admin@localhost.com',
                rol: 'ADMIN_ROLE',
                password,
            });
            
            console.log('Usuario administrador creado');
        }else{
            const { nombre, estado } = existeAdmin;
            console.log(`3 - Existe admin: ${nombre }, estado: ${estado}`);          
        }
        
    } catch (error) {        
        console.log('Error al crear usuario administrador', error);
    }
 
};

module.exports = { 
    crearRoles,
    crearAdmin
}