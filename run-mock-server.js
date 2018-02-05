var jsonServer = require('json-server');
var server = jsonServer.create();
var fs = require('fs');
var _ = require('lodash');
var mockPath = './mock';


function loadRouters() {
    var allRouters = {};
    
    fs.readdirSync(mockPath).forEach(function(file,index){
        var curPath = mockPath + '/' + file;
        var r = require(curPath);
        _.extend( allRouters, r );
    });
    
    return allRouters;
}


function makeRouters(routers) {

    console.log(routers);

    Object.keys(routers).forEach(function(k){
        server.use(k, function(req, res, next){
            res.send(routers[k]);
        })
    })
}


function startServer() {
    server.listen(3000, function () {
        console.log('JSON Server is running');
    })
}



makeRouters(loadRouters());
startServer();


