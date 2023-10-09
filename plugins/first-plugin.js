class FirstPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('hello world', (state) => {
      // console.log(state, 12138)
    })
  }
}

module.exports = FirstPlugin