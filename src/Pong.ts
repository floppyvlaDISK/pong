import Renderer from './Renderer';
import BoardObject from './BoardObject';

export default class Pong {
  private _renderer: Renderer;
  constructor(r: Renderer) {
    this._renderer = r;
  }

  public start() {
    this._renderer.render(
      new BoardObject(1, 1, 40, 40, 'red'),
    );
  }
}