var express = require("express");
var app = express();
// const routes = require("./routes/routes");
const router = require("express").Router();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static('build'));
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./build/"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
