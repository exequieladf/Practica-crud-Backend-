const users = (req,  res) => {
    console.log(req.params)
    res.send(`Hola ${req.params.name} ${req.params.apellido} `)
  }

  module.exports = {users}






