const router = require('koa-router')()

router.get('/form', async (ctx, next) => {
  await next()
  ctx.body = `
  <form action="action" method="post">
  <input type="text" name="data"/>
  <button type="submit"> post </button>
  </form>
  `
})

router.get('/:name', async (ctx, next) => {
  ctx.body = `<h1>Name:</h1><hr>${ctx.params.name}`
})

router.post('/action', async (ctx, next) => {
  let data = ctx.request.body.data
  ctx.body = `POST Data:${data}`
})

module.exports = router
