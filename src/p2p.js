const WebSockets = require('ws');

const sockets = [];

const getSockets = () => socket;

const startP2PServer = server => {
  const wsServer = new WebSockets.Server({ server });
  wsServer.on('connection', ws => {
    console.log('Hello Socket!');
  });
  console.log('Nomad P2P Server Running');
};

const initSocketConnection = socket => {
  sockets.push(socket);
};

const connectToPeers = newPeer => {
  const ws = new WebSockets(newPeer);
  ws.on('open', () => {
    initSocketConnection(ws);
  });
};

module.exports = {
  startP2PServer,
  connectToPeers,
};