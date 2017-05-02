const postCssImport = require('postcss-import');
const postCssNext = require('postcss-cssnext');

const postCssConfig = {
  plugins: [
    postCssImport({/*OPTIONS*/}),
    postCssNext(
      {
        browsers: ['last 2 versions', '> 5%']
      }
    )
  ]
}

module.exports = postCssConfig;