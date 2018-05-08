function produceDrivingRange(blockRange) {
  return function (start, end) {
    
    const distance = Math.abs(end - start);
    const diff = blockRange - distance;
    
    if (diff > 0 ) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}