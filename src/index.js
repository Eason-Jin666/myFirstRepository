const simpleSatistics = require('simple-statistics')
var ages = [29,16,17,13]
//find rhe maximum age
//find the minimum age
//find the average age
//find the mode
//find the median

console.log('Maximum age is ' + simpleSatistics.max(ages))
console.log('Minimum age is ' + simpleSatistics.min(ages))
console.log('The average ages is ' + simpleSatistics.average(ages))
console.log('The mode ages is ' + simpleSatistics.mode(ages))
console.log('The medium age is ' + simpleSatistics.median(ages))

console.log('The sum of the ages is ' + simpleSatistics.sum(ages))
console.log('The variance of the ages is ' + simpleSatistics.variance(ages))