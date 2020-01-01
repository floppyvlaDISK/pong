import Renderer from './Renderer';
import Pong from './Pong';
import PongController from './PongController';

const root = document.getElementById('root');
if (!root) {
  throw new TypeError('root element is missing');
}

const r = new Renderer(root);
const p = new Pong(r);
const c = new PongController(p);

c.start();