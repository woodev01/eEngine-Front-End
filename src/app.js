import { ChatEngine } from "./engine/ChatEngine";
import { BattleEngine } from "./engine/BattleEngine";

export class App {
  constructor() {
    this.title = 'eEngine';
    this.chat = new ChatEngine('localhost', '8080');
    this.battle = new BattleEngine('localhost', '8081', "Evan");
  }

  start_game(ev) {
    ev.preventDefault();
    this.battle.joinQueue();
  }
}
