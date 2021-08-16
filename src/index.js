module.exports = function reverse (n) { // -980


  let arrN = String(n).split(''); // [-, 9, 8, 0]

  if (arrN[0] === '-') arrN.shift(); //[9, 8, 0] 

  let rev = arrN.reverse(); // [0, 8, 9]

  if (rev[0] === '0') rev.shift(); // [8, 9]

  let str = rev.join(''); // 89

  return str;
}
