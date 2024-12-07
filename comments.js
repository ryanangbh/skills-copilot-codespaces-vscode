// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";
var MongoClient = require('mongodb').MongoClient;
var db;

// Connect to the db
MongoClient.connect("mongodb://localhost/comments", function(err, database) {
    if(err) throw err;
    db = database;
});

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    console.log("URL path: " + urlObj.pathname