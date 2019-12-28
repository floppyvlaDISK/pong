const root = document.getElementById('root');

if (!root) {
  throw new TypeError('root element is missing');
}

root.innerHTML = '<p>A lowed one will always watch over you';
root.style.padding = '50px';