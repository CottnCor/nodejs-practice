import Router from 'koa-router'
import fooRouter from './foo-router'
import userRouter from './user-router'

const router = new Router({ prefix: '/api/1.0' })
router.use(fooRouter)
router.use(userRouter)

export default router