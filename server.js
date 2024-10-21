import { JSONRPCServer } from 'json-rpc-2.0';

// Crear una instancia del servidor JSON-RPC
const server = new JSONRPCServer();

// Definir el método 'add'
server.addMethod("add", ({ a, b }) => {
  return a + b;
});

// Definir el método 'subtract'
server.addMethod("subtract", ({ a, b }) => {
  return a - b;
});

// Exportar el servidor para su uso en otros archivos
export default { server };