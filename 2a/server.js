const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

const port = process.env.PORT || 1337;

app.get('/*', (req, res) => {
  let a, b;
  if ((req.query.a !== null) && (req.query.a !== undefined)){
    a = parseInt(req.query.a);
  } else {
    a = 0;
  };
  if ((req.query.b !== null) && (req.query.b !== undefined)){
    b = parseInt(req.query.b);
  } else {
    b = 0;
  };

  res.status(200).send(`Сумма равна ${a+b}`);
});

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});