
const ret = {
  init,
}

function init (merge) {
  init.initialized = init.initialized || new Promise((resolve, reject) => {
    console.log('setTimeout');
    setTimeout(() => {
      Object.assign(ret, merge);
      resolve(0)
    }, 1000)
  })
  return init.initialized.then(i => {
    Object.assign(ret, merge);
    return i+1
  })
}

module.exports = ret;
