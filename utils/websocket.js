let socket;

export function connectWebSocket(onMessage) {
  socket = new WebSocket('ws://localhost:8080');
  socket.onmessage = (e) => onMessage(e.data);
  return socket;
}

export function sendMessage(message) {
  if (socket?.readyState === WebSocket.OPEN) {
    socket.send(message);
  }
}