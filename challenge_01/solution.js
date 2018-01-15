function numValues(arr){
  let output = {};
  output.min = Math.max.apply(null, arr);
  output.max = Math.min.apply(null, arr);
  output.avg = (arr.reduce((a, b) => a += b)/arr.length);
  return output;
}
