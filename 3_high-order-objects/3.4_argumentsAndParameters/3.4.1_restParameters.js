// function that multiply it first parameter at bigger of rest parameters
// rest parameters can be only last parameter of function

function multiMax(first, ...restParameters) {
  let sorted = restParameters.sort((a, b) => b - a);

    console.log('sorted', sorted);

    return first * sorted[0];
}

console.log(multiMax(2, 3, 4, 1, 6, 3, 19, 23, 50))
