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
  init.initialized = init.initialized || ret.wait('init', 300, 1)
  before(() => init.initialized.then(i => {
    Object.assign(ret, merge);
    return i+1
  }).then(f))
  return init.initialized
}

module.exports = ret;
