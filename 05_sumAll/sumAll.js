function sumAll(start, end) {
    let total = 0;
    for (let i = start; i <= end; i++) {
      total += i;
    }
    return total;
  }
  
  const result = sumAll(1, 4);
  console.log(result)
// Do not edit below this line
module.exports = sumAll;
