import { Context } from 'koa'
import { AES } from 'crypto-js'
import dayjs from 'dayjs'

const TOKEN_KEY = 'aud93rh9ghr9g2013hf0io'

async function login(username: string, password: string) {
  // const userId = getUserIdByUserName(username)  // get userid and match password
  const userId = 'alittleboy'
  const accessToken = AES.encrypt(
    JSON.stringify({
      userId,
      deadline: dayjs()
        .add(1, 'hour')
        .toString()
    }),
    TOKEN_KEY
  ).toString()
  const refreshToken = AES.encrypt(
    JSON.stringify({
      userId,
      deadline: dayjs()
        .add(7, 'day')
        .toString() // user dont need to login in 7 days
    }),
    TOKEN_KEY
  ).toString()
  return { accessToken, refreshToken }
}

export { login }
