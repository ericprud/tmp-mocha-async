const start = Date.now()

const ret = {
  init,
  wait: function (label, time, ret) {
    console.log(`start timer ${label} ${time} ${ret}`, Date.now()-start)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`end timer ${label} ${time} ${ret}`, Date.now()-start)
        resolve(ret)
      }, time)
    })
  },
}

function init (merge, f) {
  init.initialized = init.initialized || new Promise((resolve, reject) => {
    console.log('setTimeout');
    setTimeout(() => resolve(0), 1000)
  })
  before(() => init.initialized.then(i => {
    Object.assign(ret, merge);
    return i+1
  }))
  return init.initialized.then(f)
}

module.exports = ret;
