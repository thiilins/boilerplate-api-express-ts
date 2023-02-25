import { Router } from 'express'

import mainRoutes from './main/main.routes.js'

const router = Router()

router.use('/', mainRoutes)

export default router
