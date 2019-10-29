const nunjucks = require('nunjucks')

const createEnv = (path, opts) => {
  const autoescape = opts.autoescape === undefined ? true : opts.autoescape
  const noCache = opts.noCache || false
  const watch = opts.watch || false
  const throwOnUndefined = opts.throwOnUndefined || false
  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('views', {
      noCache: noCache,
      watch: watch
    }),
    {
      autoescape: autoescape,
      throwOnUndefined: throwOnUndefined
    }
  )
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f])
    }
  }
  return env
}

const env = createEnv('views', {
  watch: true,
  filters: {
    hex: function(n) {
      return '0x' + n.toString(16)
    }
  }
})

module.exports = env
