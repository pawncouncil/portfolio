const express = require ("express");
const router = require('./server/config/routes.js');
const path = require ("path");
const app = express();

// router(app);

app.use(express.static( __dirname + '/public/dist/public' ));



// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
app.listen(8000, function(){console.log("listening on 8000")});