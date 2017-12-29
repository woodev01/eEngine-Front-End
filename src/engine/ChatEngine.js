export class ChatEngine {
  constructor(host, port) {
    this.messages = [];
    this.currMessage = '';
    this.socket = new WebSocket(`ws://${host}:${port}`);

    this.socket.addEventListener('message', (message) => {
      let time = "" + new Date().toLocaleTimeString();
      this.messages.push({ timestamp:time, message:message.data });
    });
  }

  sendMessage() {
    this.socket.send(this.currMessage);
    this.currMessage = '';
  }
}