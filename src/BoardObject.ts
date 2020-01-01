export default class BoardObject {
  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;
  private _color: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
  ) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._color = color;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get color() {
    return this._color;
  }
}