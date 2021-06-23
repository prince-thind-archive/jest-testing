const map = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

//shifitng by 15

function caesarCipher(str) {
  const res = [];
  if(!str) return null;
  if(str.match(/^ *$/)) return null;

  for (let c of str) {
    let upperCaseFlag = false;
    if (c == c.toUpperCase()) {
      c = c.toLowerCase();
      upperCaseFlag = true;
    }

    let index = map[c];
    if (index == null) continue;
    index = (index + 15) % 26;

    let letter = Object.keys(map)[index];
    if (upperCaseFlag) {
      letter = letter.toUpperCase();
    }

    res.push(letter);
  }
  return res.join('');
}

export default caesarCipher;
