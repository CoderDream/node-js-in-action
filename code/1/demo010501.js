/**
 * Created by Admin on 2017/5/31.
 */
var fs = require('fs');
fs.readFile('resource.json', function (er, data) {
    console.log(data);
})
