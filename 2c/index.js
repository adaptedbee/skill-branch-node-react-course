const express = require('express');
const canonize = require ('./canonize');

const app = express();
app.get('/', (req, res) => {
  const url = req.originalUrl;
  const usernameFromUrl = req.query.username;
  // console.log('username ' + usernameFromUrl);
  if ((usernameFromUrl !== null) && (usernameFromUrl !== undefined)){
    const username = canonize(usernameFromUrl);
    res.json({
      url,
      username
    });
  } else {
    res.json({ message: 'No url parameters' });
  };
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});