class Maths {
    div(req, res) {
      console.log(req.params)
      let num1 = Number(req.params.divisor)
      let num2 = Number(req.params.dividendo)
      let resultado = num1 / num2;
      if (num2 === 0) {
        res.json("Error: no se puede dividir por cero");
      }
      res.json(`La división de ${num1} y ${num2} es ${resultado}`);
    }

    sum(req,  res)  {
        console.log(req.params)
        let num1= Number(req.params.num1)
        let num2= Number(req.params.num2)
        let resultado= num1 + num2;
        if (num1 < 0 || num2 < 0) {
          res.json("Error: no se pueden enviar numeros menores que cero");
        } else
        res.json(`La suma de ${num1} y ${num2} es ${resultado}`);
      }

      parimpar(req,  res) {
        let number= req.query.number
        if (number % 2 == 0) {
          return  res.send("autorizado")
        }else
        res.send("no autorizado");
      }
  }
  

module.exports = new Maths

