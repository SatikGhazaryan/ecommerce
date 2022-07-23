const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const http = require("http").createServer(app);
const port = 3003;

//Middleware => It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.
const json = express.json();

app.use(json);

//front conect backe
const staticFiles = express.static("./front");
app.use(staticFiles);

//conect mongo db

// (async () => {
//   await mongoose.connect("mongodb://localhost:27017/userproject");
// })();

const { getCategoriesController } = require("./controllers/index.js");

app.get("/", getCategoriesController);

http.listen(port, () => {
  console.log(`server is listening port ${port}`);
});
