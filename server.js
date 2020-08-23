var express = require("express");
var app = express();
const routes = require("./routes/routes");

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static('build'));

require(routes)(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
