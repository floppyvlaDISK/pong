import Renderer from './Renderer';

export default class Pong {
  private _renderer: Renderer;
  constructor(r: Renderer) {
    this._renderer = r;
  }
}