function toCountSize(maxOne, minOne, maxRes, minRes) {
    let x, y

    console.log(maxOne, minOne, maxRes, minRes)

    y = (maxRes - minRes)/(maxOne - minOne)
    x = minRes - (minOne * y)

    console.log('X: ', x, 'px', '\nY: ', y, '**')
}

//ones
const MIN_ONE = 6.95
const MAX_ONE = 6.95
//results
const MIN_RES = 174
const MAX_RES = 278


toCountSize(MAX_ONE, MIN_ONE, MAX_RES, MIN_RES)