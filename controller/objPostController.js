const objPost = (req, res) => {
    const nombre = req.body.nombre;
    const response = {
      nombre: nombre,
      status: 'success'
    };
    res.json(response);
  }
  module.exports = {objPost}