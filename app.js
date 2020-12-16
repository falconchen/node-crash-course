const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  //res.send('<p>home page</p>')
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//30x
app.get("/about-us", (req, res) => {
  res.redirect("/about",301);
});


//404
app.use((req, res) => { //use用于最终匹配,必须放在最后
    //res.sendStatus(404);
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});