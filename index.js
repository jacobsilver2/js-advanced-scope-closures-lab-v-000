function produceDrivingRange(blockRange) {
  return function (start, end) {
    const distance = start - end;
    const diff = blockRange - distance;
    
    if (diff > 0 ) {
      `within range by ${diff}`
    } else {
      `${diff} blocks out of range`
    }
  }
}