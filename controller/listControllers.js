const list = (req,  res) => {

    const objeto = {
      producto1: req.query.producto1,
      producto2: req.query.producto2,
      producto3: req.query.producto3,
      producto4: req.query.producto4,
      producto5: req.query.producto5
    }
  
    res.json({objeto})
  }
  module.exports = {list}