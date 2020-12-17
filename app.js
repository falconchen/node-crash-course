const express = require("express");
const { add } = require("lodash");

const app = express();

app.set('view engine', 'ejs');
//app.set('view', 'myviewDir');

app.listen(3000);

app.get("/", (req, res) => {
  //res.send('<p>home page</p>')
  //res.sendFile("./views/index.html", { root: __dirname });
    const blogs = [
        { title: 'title1', snippet: "hello world" },
        { title: 'title2', snippet: "hello world 2" },
        { title: 'title3', snippet: "hello world 3"},
        { title: 'title4', snippet: "hello world 4" },
        { title: 'title5', snippet: "nothing" }
        
    ]
    res.render('index',{title: "Home",blogs});
});
app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render('about',{title:"about"});
});

//30x
app.get("/about-us", (req, res) => {
  res.redirect("/about",301);
});

app.get('/blogs/create', (req, res) => {
    res.render('create',{title:'create'});
})

//404
app.use((req, res) => { //use用于最终匹配,必须放在最后
    //res.sendStatus(404);
    res.status(404).render('404');
});