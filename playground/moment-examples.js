var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log("Current timestamp: "+ now.unix());

var timestamp = 1477412444;

var currentMoment = moment.unix(timestamp);
console.log('Timestamp formatted: ' + currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
