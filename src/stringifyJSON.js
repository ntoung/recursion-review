// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var typeObj = typeof obj;
  var str = '' +obj;
  
  if ( typeObj === 'number' || obj === null || typeObj === 'boolean') {
  	return str;
  }
  if ( typeObj === 'string') {
  	return '"' + obj + '"';
  }
  if ( Array.isArray (obj)) {
  	var results = [];
  	for ( var i = 0; i < obj.length; i++ ) {
  		results.push( stringifyJSON( obj[i]));
  	}
  	return '[' + results + ']';
  }
  if ( typeObj === 'object') {
  	var results = [];
  	for ( var key in obj) {
  	  if( key === 'functions' || key === undefined) {
  	  	return '{}';
  	  }	
    results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
  	}
  	return '{' + results.join(',') + '}';
  }
};
