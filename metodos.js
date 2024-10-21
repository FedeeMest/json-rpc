import express, { json } from 'express';
import { server } from './metodos'; // Importamos el servidor JSON-RPC

// Crear una aplicación Express
const app = express();

// Configurar Express para manejar JSON
app.use(json());

// Ruta para manejar todas las solicitudes JSON-RPC
app.post("/api", (req, res) => {
  const jsonRPCRequest = req.body;
  server.receive(jsonRPCRequest).then((jsonRPCResponse) => {
    if (jsonRPCResponse) {
      res.json(jsonRPCResponse);
    } else {
      res.sendStatus(204);
    }
  });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor JSON-RPC funcionando en http://localhost:${PORT}/api`);
});