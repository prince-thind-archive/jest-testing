function reverseString(str) {
  if (!str) return null;

  let res;
  res = str
    .split('')
    .filter((e) => e.match(/^[a-zA-Z0-9]*$/))
    .reverse()
    .join('');

  if (!res) return null;
  return res;
}

export default reverseString;
