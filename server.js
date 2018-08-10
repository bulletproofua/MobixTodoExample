const express = require('express');
const app = express();
const port = 8081;
const www = './dist_mobx';
app.use(express.static(www));
console.log(`serving ${www}`);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: www });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
