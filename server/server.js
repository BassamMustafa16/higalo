// server.js
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Express server is running!');
});

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
