const fs = require('fs')

const addControllers = (router, dir) => {
  let files = fs.readdirSync(__dirname + '/router')
  let js_files = files.filter(f => {
    return f.endsWith('.js')
  })
  for (let f of js_files) {
    console.log(`process controller: ${f}...`)
    let path = f.replace(/\.js$/, '')
    let route = require(`./${dir}/${path}`).path
    typeof route !== 'undefined' ? (route = '/' + route) : (route = path)
    router.use(route, require(`./${dir}/${path}`).routes())
    console.log(`Route name:${route}`)
  }
}

module.exports = (dir = 'routes') => {
  let controllers_dir = dir
  let router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}
