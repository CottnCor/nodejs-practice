import { Context } from 'koa'
import { AES, enc } from 'crypto-js'
import dayjs from 'dayjs'

const TOKEN_KEY = ''

export default async function(ctx: Context, next: Function) {
  const accessToken = ctx.request.header['access-token']
  const accessInfo = AES.decrypt(accessToken, TOKEN_KEY).toString(enc.Utf8)
  if (!accessInfo || dayjs() > dayjs(accessInfo.deadline)) {
    ctx.throw(401, 'please login')
    return
  }
  // const user = userService.getUser()
  // ctx.state.user = user
  await next()
}
