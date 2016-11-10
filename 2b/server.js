const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

const port = process.env.PORT || 1337;

app.get('/*', (req, res) => {
  let fullnameQuery = req.query.fullname;
  let fullnameArray = [];

  if ((fullnameQuery === null) || (fullnameQuery === undefined)){
    res.status(400).send('Invalid request');
  } else {
    fullnameArray = fullnameQuery.split(' ');
  };

  if (fullnameArray.length > 3){
    res.status(400).send('Invalid fullname');
  } else if (fullnameArray.length == 3) {
    res.status(200).send(`${fullnameArray[2]} ${fullnameArray[0].substr(0,1)}. ${fullnameArray[1].substr(0,1)}.`);
  } else if (fullnameArray.length == 2) {
    res.status(200).send(`${fullnameArray[1]} ${fullnameArray[0].substr(0,1)}.`);
  } else if (fullnameArray.length == 1) {
    res.status(200).send(fullnameArray[0]);
  };

});

app.listen(port, () => {
  console.log(`Listening port ${port}...`);
});