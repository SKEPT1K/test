solution(6, 7, 3, [1,3], [1,5]);

function solution (x, y, k, a, b) {
  let width = x;
  let length  = y;
  let cutsWidth  = a;
  let cutsLength  = b;
  let find   = k;

  // width
  /*
  For example, a cake with sides X = 6, Y = 7 and arrays A and B such that:
    A[0] = 1    B[0] = 1
    A[1] = 3    B[1] = 5
  */
  let resultX = [];
  let resultY = [];
  resultX.push(width)
  cutsWidth.forEach(function(cut){
    width -= cut;
    resultX.push(width);
  });

  cutsLength.forEach(function(cut){
    length -= cut;
    resultY.push(length);
  });
  console.log(resultY, resultX)

let finalResult = [];
for(var xI = 0; xI < length; xI++){
  for(var yI = 0; yI < length; yI++){
    finalResult.push(resultX[xI] * resultY[yI]);
  }
}

finalResult = finalResult.sort(function(a,b) {return a-b;});

console.log("The answer is: ", finalResult[k-1]);
  /*
  y[1, 4, 2]
  x[1, 2, 3]
  */
}
