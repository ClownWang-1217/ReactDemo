var express = require("express");
var path = require('path');
var App = express();



App.use(express.static(path.join(__dirname, 'dist')));
App.set('view engine','html')
App.set('views', __dirname + '/dist');
App.engine('html',require("ejs").renderFile);

App.get("/",function(req,res){
    console.log("App.use");
    res.render("views/root");

    //res.send('main.html');

})

App.listen(5000,function()
{
    console.log("listen");
})