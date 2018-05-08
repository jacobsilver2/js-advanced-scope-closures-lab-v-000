function produceDrivingRange(blockRange) {
  return function (r) {
    if (r < blockRange) {
       `within range by ${blockRange - r}`
    } else {
       `${} blocks out of range`
    }
  }
}