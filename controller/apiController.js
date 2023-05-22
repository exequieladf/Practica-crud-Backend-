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

  eliminar(req, res) {
    res.status(200).json({
      msg: "tu producto se elimino con exito",
    });
  }
}

module.exports = new apiController();
