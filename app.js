var express = require('express');
var app = express();
app.get('/api/users', function (req, res) {
  res.send('Hello test app123 - Working');
});
app.listen(5000, function () {
  console.log('Example app listening on port 5000!!!');
});
