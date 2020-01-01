import Pong from './Pong';

export default class PongController {
  private _pong: Pong;
  constructor(p: Pong) {
    this._pong = p;
  }

  public start() {
    this._pong.start();
  }
}