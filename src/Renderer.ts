import BoardObject from './BoardObject';
import { BOARD_WIDTH, BOARD_HEIGHT } from './CONST';

export default class Renderer {
  private _ctx: CanvasRenderingContext2D | null;

  constructor(container: HTMLElement) {
    this._ctx = this.createAndMountCanvas(container).getContext('2d');
  }

  public render(obj: BoardObject) {
    this.ctx().fillStyle = obj.color;
    this.ctx().fillRect(
      obj.x,
      obj.y,
      obj.width,
      obj.height,
    );
  }

  private ctx() {
    if (!this._ctx) {
      throw new TypeError('Renderer: canvas context in not initialized');
    }
    return this._ctx;
  }

  private createAndMountCanvas(container: HTMLElement) : HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = BOARD_WIDTH;
    canvas.height = BOARD_HEIGHT;
    container.appendChild(canvas);
    return canvas;
  }
}