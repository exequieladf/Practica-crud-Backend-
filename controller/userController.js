class UserController {
    session (req, res) {
        let persona = {
            nombre: "juan",
            idioma: "español"
        }
        req.session.persona = persona;
        res.json(req.session)
    }
    probarSession (req, res){
        res.json(req.session)
    }
    cerrarSession (req, res) {
        req.session.destroy();
        res.json({
            msg: "sesion cerrada",
        })
    }
    
}


module.exports = new UserController