const {validationResult} = require("express-validator");

const validarChecks = (req, res, next) => {
    const err = validationResult(req)
            if (err.isEmpty()) {
                next()
                res.status(201).json(nuevoProducto)
            } else {
                res.status(500).json(err)
            }
}

module.exports = {validarChecks}