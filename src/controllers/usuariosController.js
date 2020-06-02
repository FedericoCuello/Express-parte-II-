const path = require('path');
const usuariosController = {
    login: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/usuarios/login.html'));
        res.render(path.resolve(__dirname,'../views/usuarios/login.ejs'))
    },
    registro: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/usuarios/registro.html'));
        res.render(path.resolve(__dirname, '../views/usuarios/registro.ejs'))
    }

}
module.exports = usuariosController;