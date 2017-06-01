#!/usr/bin/env node
'use strict';
var meow = require('meow');
var quotes = require('./');

var cli = meow([
	'Examples',
	'  $ quotes',
	'  "Xander Crews/Barnaby Jones: Do you hear a dial tone? \'Cause Barnaby Jones is off the hook!"',
	''
]);

console.log(cli.flags.all ? quotes : quotes());
