const { check } = require("express-validator");

const checks = [
  check("producto")
    .notEmpty().withMessage("El campo producto es obligatorio")
    .isString().withMessage("El campo producto tiene que ser de tipo string"),
  check("utilidad")
    .notEmpty().withMessage("El campo utilidad es obligatorio")
    .isString().withMessage("El campo utilidad tiene que ser de tipo string"),
  check("ventaLibre")
    .notEmpty().withMessage("El campo ventaLibre es obligatorio")
    .isBoolean().withMessage("El campo venta libre tiene que ser de tipo boolean"),
  check("retiro")
    .notEmpty().withMessage("El campo retiro es obligatorio")
    .isString().withMessage("El campo retiro tiene que ser de tipo string"),
];

module.exports = checks
