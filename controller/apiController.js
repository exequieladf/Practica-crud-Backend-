const { Farmaciaa } = require("../models/farmacia");

class apiController {
  async list(req, res) {
    const producto = await Farmaciaa.find();
    res.status(200).json(producto);
  }

  async crear(req, res) {
    try {
      const nuevoProducto = new Farmaciaa(req.body);
      await nuevoProducto.save();
      res.status(201).json(nuevoProducto);
    } catch (error) {}
  }

  async buscarSegunId(req, res) {
    console.log("llegue al controlador");
    const producto = await Farmaciaa.findById(req.params.id);
    res.status(200).json(producto);
  }

async editar (req, res) {
  try {
    await Farmaciaa.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json({
      msg:"persona actualizada"
    })
  }catch (error) {
    res.status(500).json(error)
  }
}

  async eliminar(req, res) {
    await Farmaciaa.findByIdAndDelete(req.params.id)
    res.status(200).json({
      msg: "la persona fue eliminado"
    }) 
  }
}

/*Se puede hacer asi:
 async eliminar(req, res) {
    await Farmaciaa.findByIdAndDelete(req.params.id)
    res.status(204).send() 
  }

//OTRA COSA A TENER EN CUENTA: BORRADO LOGICO, SI ES UNA CUENTA BANCARIA SE CAMBIA UN STATUS DE ACTIVO TRUE A FALSE, DESACTIVANDO LA CUENTA PERO GUARDANDO DATOS
BORRADO ESPEJO ES MAS CONOCIDA EN LOS BANCOS TAMBIEN: CREO EL USUARIO Y LO HACE EN DOS TABLAS SEPARADAS. Uno es para la app otro solamente para respaldo(puede contener
  cosas privadas con datos sensibles)
 */

module.exports = new apiController();
