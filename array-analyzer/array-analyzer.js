function arrayAnalyzer(arr) {
  if (!arr) return null;
  const nonNumericFlag = arr.some((e) => {
    return e==null||e.toString().match(/^[^0-9]*$/) || Array.isArray(e)||e=='';
  });
  if (nonNumericFlag) return null;
  
  if (arr.length == 0) {
    return {
      max: 0,
      min: 0,
      length: 0,
      average: 0,
    };
  }

  const res = {};
  
  res.length = arr.length;
  res.max = arr.reduce((acc, b) => {
    return acc > b ? acc : b;
  });
  res.min = arr.reduce((acc, b) => {
    return acc < b ? acc : b;
  });
  res.average = +(
    arr.reduce((acc, b) => {
      return acc + b;
    }, 0) / arr.length
  ).toFixed(2);

  return res;
}

export default arrayAnalyzer;
