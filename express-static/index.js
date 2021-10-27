const express = require('express');
const app = express();
const path = require('path');

const absolutPath = path.join(__dirname, 'public');
console.log(absolutPath);

const server = express.static('public');
app.use(server);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
