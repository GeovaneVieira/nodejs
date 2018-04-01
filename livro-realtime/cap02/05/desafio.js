var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
    var requiredResource = url.parse(request.url);
    
    var fileHtmlName = requiredResource.pathname + '.html';
    console.log(file)

    fs.exists(__dirname + fileHtmlName, function(exists) {
        if(exists) {
            console.log('arquivo existe');
        }
        else {
            console.log('arquivo não existe');
        }
    });



    // fs.readFile(__dirname + file + '.html', function(err, html){
    //     response.writeHeader(200, {'Content-Type':'text/html; charset=utf-8'});

    //     if(err) {
    //         //console.log('Erro: ', err);
    //         return;
    //     }
        
        
    //     response.write(html);
    //     response.end();
    // });
});

server.listen(3000, function() {
    console.log('Executando site pessoal');
});