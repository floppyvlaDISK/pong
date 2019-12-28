const express = require('express');
const path = require('path');

const PORT = 1234;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is listening to port: ${PORT}`);
  }
});