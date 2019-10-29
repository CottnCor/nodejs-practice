router.get('/hello/:name', async (ctx, next) => {
  await next()
  let name = ctx.params.name
  ctx.body = `<h1>Hello, ${name}!</h1>`
})

module.exports = router
