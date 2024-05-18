// 1
console.log(Number(' 1 2 3 4 5'));
console.log(NaN);
// 2
console.log(Number('1234 5'));
console.log(NaN);
// 3
console.log(Number('12345'));
console.log(12345);
// 4
console.log(String(false));
console.log('false');
// 5
console.log(Boolean(0000000));
console.log(false);
// 6
console.log(Boolean(0.0000001));
console.log(true);
// 7
console.log(String(undefined));
console.log('undefined');
// 8
console.log(Number('100f'));
console.log(NaN);
// 9
console.log(Number('100'));
console.log(100);
// 10
console.log(Number('000001'));
console.log(1);