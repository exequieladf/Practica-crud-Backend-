const app = require('./app')
require('dotenv').config();
const port = process.env.PORT || 3000

app.listen(port, function() {
  console.log(`La aplicación está corriendo en ${port}`);
});