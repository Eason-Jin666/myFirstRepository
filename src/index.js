//day3
// const simpleSatistics = require('simple-statistics')
// var ages = [29,16,17,13]
//find rhe maximum age
//find the minimum age
//find the average age
//find the mode
//find the median

// console.log('Maximum age is ' + simpleSatistics.max(ages))
// console.log('Minimum age is ' + simpleSatistics.min(ages))
// console.log('The average ages is ' + simpleSatistics.average(ages))
// console.log('The mode ages is ' + simpleSatistics.mode(ages))
// console.log('The medium age is ' + simpleSatistics.median(ages))

// console.log('The sum of the ages is ' + simpleSatistics.sum(ages))
// console.log('The variance of the ages is ' + simpleSatistics.variance(ages))


//Homework
//Explore npmjs.com find an interesting package
//Using simple satistics code a small project





//day4

const favoriteFood = [{
    id: '001',
    name: 'Pizza',
    isHot: true,
    isWesten: true
},{
    id: '002',
    name: 'ice cream',
    isHot: false,
    isWesten: false
},{
    id: '003',
    name: 'Peking duck',
    isHot: true,
    isWesten: false
},{
    id: '004',
    name: 'steak',
    isHot: true,
    isWesten: true
},{
    id: '005',
    name: 'sushi',
    isHot: false,
    isWesten: false
},{
    id: '006',
    name: '串串香',
    isHot: true,
    isWesten: false
}
]

// var westenFood = function(favoriteFood){
//     for (var ii = 0; ii < favoriteFood.length; ii = ii + 1){
//         var dishes = favoriteFood[ii]

//         if(dishes.isWesten===true){
//             console.log(dishes.name)
//         }
//     }
// }

//westenFood(favoriteFood)

// var findFoodByName = function(favoriteFood, nameOfDishes){
//     var result = null
//     for (var jj = 0; jj < favoriteFood.length; jj = jj + 1){
//         var dishes = favoriteFood[jj]
//         if(dishes.name===nameOfDishes){
//             result = dishes
//         }
//     }

//     return result
// }

// console.log(findFoodByName(favoriteFood, '串串香'))


//The Javascript Data Methods: FIND

// const pizza = favoriteFood.find(function(item){
//     return(item.name === 'Pizza')
// })

// console.log(pizza)

// const pizza = favoriteFood.find(function(item){
//     return(item.id === '001')
// })

// console.log(pizza)

// const westenFood = favoriteFood.filter(function(item){
//     return(item.isWesten === true)
// })

// console.log(westenFood)s

const coldFood = favoriteFood.filter(function(item){
    return(item.isHot === false)
})

console.log(coldFood)
