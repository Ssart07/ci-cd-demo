const express = require('express'); // cargamos express para crear el servidor
const app = express();              // creamos la aplicacion
const port = process.env.PORT || 3000; // usamos el puerto de Render en produccion y 3000 en local

app.get('/', (req, res) => {
  res.send('Aplicacion v1.0 - CI/CD funcionando'); // respuesta visible para confirmar que la app corre
});

app.listen(port, () => console.log(`Servidor ejecutandose en puerto ${port}`)); // levantamos el servidor