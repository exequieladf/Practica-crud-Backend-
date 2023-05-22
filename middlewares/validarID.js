const { Farmaciaa } = require("../models/farmacia.js");
/*El middleware es como un controlador lleva req y res, sin embargo
tambien tienen un parametro adicional llamado next, que funciona para del middleware 
saltar al controlador
*/
const validarID = async (req, res, next) => {
  try {
    const producto = await Farmaciaa.findById(req.params.id);
    console.log("Estoy en el middleware");
    if (producto !== null) {
      next();
    } else {
      res.status(400).json ({
        msg: "ID invalido",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { validarID };
