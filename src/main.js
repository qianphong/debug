!(function () {
  function fun() {
    const a = 1
    const b = 2
    return function () {
      const c = 2
      console.log(a, c)
    }
  }
  const f = fun()
  f()
})()
