import { ChatEngine } from './ChatEngine';

export class BattleEngine extends ChatEngine {
  constructor(host, port, username) {
    super(host, port);
  }

  joinQueue(username) {
    this.socket.send(`QueueRequest:${username}`);
  }
}