
const express = require('express')
const app = express()
const port = process.env.PORT;

console.log("variables",process.env.PORT, process.env.SAMPLE);

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});