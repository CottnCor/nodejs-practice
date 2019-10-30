import { Context } from 'koa'

async function hello(ctx: Context) {
  const { name } = ctx.query
  ctx.body = { name }
}

export { hello }
