const start = Date.now()

const ret = {
  init,
  setup: function (label, time) {
    return init.initialized.then(() => this.wait(label, time))
  },
  wait: function (label, time) {
    console.log(`${label} start ${time} T+${Date.now()-start}`)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${label} end ${time} T+${Date.now()-start}`)
        resolve(time)
      }, time)
    })
  },
}

function init (merge, f) {
  init.initialized = init.initialized || ret.wait('init', 300)
  before(() => init.initialized.then(i => {
    Object.assign(ret, merge);
    return f ? f(i+1) : i+1
  }))
  return init.initialized
}

module.exports = ret;
