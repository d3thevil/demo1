var a = [1, 3, 5, 2, 4, 6, 8, 7, 10, 9];

// 1
function sum() {
  var sr = a.reduce(function(c, d) { return c + d; }, 0);
  
  var sl = 0;
  for (var e = 0; e < a.length; e++) {
    sl += a[e];
  }

  console.log("with reduce: ", sr);
  console.log("with loop: ", sl);
}
//2

function mm() {
  a.sort(function(c, d) { return c - d; });
  var mi = a[0];
  var ma = a[a.length - 1];

  console.log("Min: ", mi, " Max: ", ma);
}

//3

function feo() {
  var ev = a.filter(function(f) { return f % 2 == 0; });
  
  var od = a.filter(function(f) { return f % 2 != 0; });

  console.log("Even num: ", ev);
  console.log("Odd num: ", od);
}
//4


function sq() {
  var sqn = a.map(function(f) { return f * f; });

  console.log("Squared number: ", sqn);
}

//5

function fpn() {
  var pn = a.filter(function(f) {
    for (var g = 2; g <= Math.sqrt(f); g++) {
      if (f % g === 0) return false;
    }
    return f > 1;
  });

  console.log("Prime number: ", pn);
}

//6
function fw() {
  var h = 0, i = 1, j = 1;
  while (j <= 50) {
    console.log(j);
    j = h + i;
    h = i;
    i = j;
  }
}

function fdw() {
  var k = 0, l = 1, m = 1;
  do {
    console.log(m);
    m = k + l;
    k = l;
    l = m;
  } while (m <= 50);
}

function ff() {
  var n = 0, o = 1, p = 1;
  for (; p <= 50;) {
    console.log(p);
    p = n + o;
    n = o;
    o = p;
  }
}

sum();
mm();
feo();
sq();
fpn();
console.log("while loop:");
fw();
console.log("do-while loop:");
fdw();
console.log("for loop:");
ff();
