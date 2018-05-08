function produceDrivingRange(blockRange) {
  return function (startBlock, endBlock) {
    
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    const distance = Math.abs(end - start);
    const diff = blockRange - distance;
    
    if (diff > 0 ) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(subTotal) {
    return percentage * subTotal
  }
}

