const Usuario = require('../models/usuario');

const existenteEmail = async (correo = '') =>{
    const existenteEmail = await Usuario.findOne({correo});
    if(existenteEmail){
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }
}

const existeUsuarioById = async (id = '') => {
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error(`El usuario con el id ${ id } No existe`)
    }
}



module.exports = {
    existenteEmail,
    existeUsuarioById,
}