'use strict';

const uniqueRandomArray = require('unique-random-array');
const quotes = require('./quotes.json');

module.exports = uniqueRandomArray(quotes);
