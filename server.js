var http=require("http");
var express=require("express");
var fs=require("fs");
var app=express();
app.get("/",function(req,resp)
{
	app.sendFile("index.html");
});
app.listen(2000);