import { Router } from 'express'

import mainRoutes from '@modules/main/main.routes'

const router = Router()

router.use('/', mainRoutes)

export default router
