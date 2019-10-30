import Router from 'koa-router'
import * as fooController from '../controller/foo-controller'
import { requireLogin } from '../middleware'

const router = new Router({ prefix: '/foo' })

router.get("/hello", requireLogin, fooController.hello)

export default router.routes()