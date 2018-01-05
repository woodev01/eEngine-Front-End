import { ChatEngine } from './ChatEngine';

export class BattleEngine extends ChatEngine {
  constructor(host, port, username) {
    super(host, port);
    this._username = username;
  }

  joinQueue() {
    console.log(`Queue Request for: ${this._username}`);
    this.socket.send(`QueueRequest:${this._username}`);
  }
}