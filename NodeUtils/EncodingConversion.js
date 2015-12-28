/*ENCODING CONVERSION*/
var request = require('request');

var iconv = require('iconv-lite');
var http = require('http');
var url = require('url');
var r = request.get({
    url: "",
    timeout: 20000,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36'
    }
}, function(error, response, body) {
    //console.log(body);
    //var result = JSON.parse(body);
    var converterStream = iconv.decodeStream('win1251');
    response.pipe(converterStream);
    converterStream.on('data', function(str) {
        console.log(str); // Do something with decoded strings, chunk-by-chunk.
    });


    var parseString = require('xml2js').parseString;
    parseString(body, {
        explicitArray: false,
        normalize: true,
        ignoreAttrs: true
    }, function(err, result) {
        //logger.info("XML to JSON conversion done.");
        //normalize:Trim whitespaces inside text nodes.
        //explicitArray:Always put child nodes in an array if true; otherwise an array is created only if there is more than one.
        //var finalNode = traverseJSON(result,configData,username1,type);
        //console.log(JSON.stringify(result));
    });
    //var finalNode = traverseJSON(result,configData,username1,type);
});
