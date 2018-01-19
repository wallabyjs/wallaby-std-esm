module.exports = function () {
  return {
    files: [
      'src/**/*.js',
    ],
    tests: [
      'tests/**/*.spec.js'
    ],
    env: {
      type: 'node',
      params: {
        env: 'ESM_OPTIONS=cjs',
        runner: `-r ${require('path').join(__dirname, 'node_modules/@std/esm')}`
      }
    }
  }
};