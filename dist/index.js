"use strict";
const bar = 2;
console.log(bar);
const btn = document.querySelector('button');
if (btn)
    btn.onclick = function (e) {
        console.log(e);
    };
const foo = 1;
console.log(foo);
eval(`!(function () {
    const obj = {
      a: 1,
      foo() {
        console.log(this.a)
      },
    }
    const obj2 = {
      a: 2,
      obj,
    }
    obj2.obj.foo()
  })()
  //# sourceURL=main.js
  `);
//# sourceMappingURL=index.js.map