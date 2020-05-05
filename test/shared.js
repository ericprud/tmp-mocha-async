const start = Date.now()

const ret = {
  init,
  wait: function (label, time, ret) {
    console.log(`${label} start ${time} ${ret}`, Date.now()-start)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${label} end ${time} ${ret}`, Date.now()-start)
        resolve(ret)
      }, time)
    })
  },
}

function init (merge, f) {
  init.initialized = init.initialized || ret.wait('init', 1000, 0)
  before(() => init.initialized.then(i => {
    Object.assign(ret, merge);
    return i+1
  }))
  return init.initialized.then(f)
}

module.exports = ret;
