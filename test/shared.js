
const ret = {
  init,
}

function init (merge) {
  init.initialized = init.initialized || new Promise((resolve, reject) => {
    console.log('setTimeout');
    setTimeout(() => resolve(0), 1000)
  })
  before(() => init.initialized.then(i => {
    Object.assign(ret, merge);
    return i+1
  }))
  return init.initialized
}

module.exports = ret;
