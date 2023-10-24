/*
Right Triangle 
* 
* * 
* * * 
* * * * 
*/
// rightTriangle(4)
function rightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let square = ''
    for (let j = 0; j <= i; j++) {
      square += '* '
    }
    console.log(square)
  }
}

/*
 square pattern
* * * * 
* * * * 
* * * * 
* * * * 
*/
function squarePattern(n) {
  for (let i = 0; i < n; i++) {
    let square = ''
    for (let j = 0; j < n; j++) {
      square += '* '
    }
    console.log(square)
  }
}
// squarePattern(4)

/*
ReversedRightTrainglePattern
* * * * 
* * * 
* * 
* 
*/
function reversedRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let pattern = ''
    for (let j = 0; j < n - i; j++) {
      pattern += '* '
    }
    console.log(pattern)
  }
}
// reversedRightTriangle(4)

/*
NumberedRightTriangle
1 
1 2 
1 2 3 
1 2 3 4 
*/

function NumberedRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let pattern = ''
    for (let j = 0; j <= i; j++) {
      pattern += j + 1 + ' '
    }
    console.log(pattern)
  }
}

// NumberedRightTriangle(4)

/*
Arrow forward
* 
* * 
* * * 
* * * * 
* * * 
* * 
* 
*/
function Arrowforward(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let pattern = ''
    if (i < n) {
      for (let j = 0; j <= i; j++) {
        pattern += '* '
      }
    } else {
      for (let j = 0; j < 2 * n - 1 - i; j++) {
        pattern += '* '
      }
    }
    console.log(pattern)
  }
}

// Arrowforward(4)

/*
spacedRightTriangle
      * 
    * * 
  * * * 
* * * * 

*/

function spacedRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let pattern = ''
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '  '
    }
    // stars
    for (let k = 0; k <= i; k++) {
      pattern += '* '
    }
    console.log(pattern)
  }
}

// spacedRightTriangle(10)

/*

ReveresedspacedRightTriangle
* * * * * 
  * * * * 
    * * * 
      * * 
        * 

*/
function ReveresedspacedRightTriangle(n) {
  for (let i = 0; i < n; i++) {
    let pattern = ''
    for (let j = 0; j < i; j++) {
      pattern += '  '
    }
    for (let k = 0; k < n - i; k++) {
      pattern += '* '
    }
    console.log(pattern)
  }
}
// ReveresedspacedRightTriangle(5)

/*
Equilateral Triangle 
                * 
              * * * 
            * * * * * 
          * * * * * * * 
        * * * * * * * * * 
      * * * * * * * * * * * 
    * * * * * * * * * * * * * 
  * * * * * * * * * * * * * * * 
* * * * * * * * * * * * * * * * * 


*/
function EquilateralTriangle(n) {
  for (let i = 0; i < n; i++) {
    let pattern = ''
    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      pattern += '  '
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      pattern += '* '
    }
    console.log(pattern)
  }
}

// EquilateralTriangle(9)
