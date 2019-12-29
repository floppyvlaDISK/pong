import Pong from './Pong';

export default class PongController {
  private _pong: Pong;
  constructor(p: Pong) {
    this._pong = p;
  }

  public exec() {
    console.log('game has started');
  }
}