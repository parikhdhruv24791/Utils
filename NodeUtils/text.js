const fs = require("fs");
var xml2js = require('xml2js');
var _ = require('underscore');
var async = require('async');
fs.readdir("Test", (err, files) => {
    files.forEach(file => {
        fs.readFile("Test/" + file, 'utf8', function(err, data) {
            xml2js.parseString(data, { explicitArray: false, ignoreAttrs: false }, function(err, result) {
                if (err) throw err;
                var indexs = result.document["xn:Resource"]["xn:vendorData"];
                var index = _.findIndex(indexs, (ele) => {
                    return ele.indexOf("date.publication") !== -1
                });
                console.log(index)
                let a = result.document["xn:Resource"]["xn:vendorData"][index];
                result.document["xn:Resource"]["xn:vendorData"][index] = a.replace("-", "").replace("-", "").replace(":", "").replace(":", "").replace(":", "").replace("Z", "+0100")
                var builder = new xml2js.Builder({ xmldec: { 'version': '1.0', 'encoding': 'UTF-8' } });
                var xml = builder.buildObject(result);
                fs.writeFile(file, xml, function(err) {
                    if (err) throw err;
                    console.log('Writing XML to Cache : ', path);
                });
            });
        });
    });
})
