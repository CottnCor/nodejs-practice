import { Context } from 'koa'
import * as userService from '../service/user-service'

async function login(ctx: Context) {
  console.log(ctx.request.body)
  const { username, password } = ctx.request.body
  const token = await userService.login(username, password)
  ctx.body = {
    success: true,
    token
  }
}

export { login }
