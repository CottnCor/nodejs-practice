import Router from 'koa-router'
import * as userController from '../controller/user-controller'

const router = new Router({ prefix: '/user' })

router.post("/login", userController.login)

export default router.routes()