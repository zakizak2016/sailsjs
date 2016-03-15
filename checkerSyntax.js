// npm install --save-dev syntax-error fs-readdir-recursive async
var fs = require('fs');
var _ = require('lodash');
var async = require('async');
var check = require('syntax-error');
var read = require('fs-readdir-recursive');


var api = _.map(read(__dirname + '/api'), function(n) {return '/api/' + n});
var config = _.map(read(__dirname + '/config'), function(n) {return '/config/' + n});

var files = api.concat(config);
files = _.filter(files, function(o) { return o.indexOf('.json') < 0 });
files = _.filter(files, function(o) { return o.indexOf('_README.md') < 0 });


async.eachSeries(files, function(file, callback) {

	var toCheck = fs.readFileSync(__dirname +file);
	var err = check(toCheck, file);
	callback(err);
},

function(err, results) {
	if(err)
		return console.log(err);

	return console.log('DONE');
});

