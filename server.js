var http_myserver = require('http');
//var myRequest = http_myserver.ServerRequest;
//var myResponse = http_myserver.ServerResponse;
var port = process.env.PORT || 3000;

var myAPI = function(http_request, http_response){
        processRequest(http_request);
        processResponse(http_response);
    };
    
function processRequest(myRequest){
    console.log(myRequest.url);    
}

function processResponse(myResponse){
    myResponse.writeHead(200, {'content-type':'text/plain'});
    myResponse.write('Hello world');
    myResponse.end();
}
    
var start_Myapp = function(){
   
    http_myserver.createServer(myAPI).listen(port);
    console.log('server started on port:' + port);
};

module.exports.start = start_Myapp;