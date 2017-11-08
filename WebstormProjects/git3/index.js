/**
 * Created by devender.sapcrm on 11/8/2017.
 */
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3002);
    console.log('Express started on port 3002');
}
