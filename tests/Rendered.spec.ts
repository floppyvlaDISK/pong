import * as sinon from 'sinon';

import Renderer from '../src/Renderer';
import BoardObject from '../src/BoardObject';

describe('Renderer', () => {
  const sandbox = sinon.createSandbox();
  let container: HTMLDivElement;

  beforeEach(() => {
    container = createContainer();
  });

  describe('constructor()', () => {
    it('creates canvas element', () => {
      const r = new Renderer(container);

      expect(container.querySelector('canvas')).toBeTruthy();
    });
  });

  describe('render()', () => {
    it('throws an error if canvas context is falsy', () => {
      const canvasMock = document.createElement('canvas');
      canvasMock.getContext = () => null;
      sandbox.stub(document, 'createElement').withArgs('canvas').returns(canvasMock);

      const fn = () => {
        const r = new Renderer(container);
        r.render(new BoardObject(1, 1, 40, 40, 'red'));
      };

      expect(fn).toThrow();
    });

    it('draws rectangle representing BoardObject', () => {
      const fillRectSpy = sandbox.spy();
      const canvasMock = document.createElement('canvas');
      const contextMock = canvasMock.getContext('2d') as CanvasRenderingContext2D;
      contextMock.fillRect = fillRectSpy;
      sandbox.stub(canvasMock, 'getContext').returns(contextMock);
      sandbox.stub(document, 'createElement').withArgs('canvas').returns(canvasMock);

      const r = new Renderer(container);
      r.render(new BoardObject(1, 1, 40, 40, 'red'));

      expect(contextMock.fillStyle).toBe('red');
      expect(fillRectSpy.callCount).toBe(1);
      expect(fillRectSpy.getCall(0).args).toEqual([
        1, 1, 40, 40
      ]);
    });
  });

  afterEach(() => {
    container.remove();
    sandbox.restore();
  });

  function createContainer() {
    const result = document.createElement('div');
    document.body.appendChild(result);
    return result;
  }
});