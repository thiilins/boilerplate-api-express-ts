import { Router } from 'express'

import { Index } from './main.controller.js'

const router = Router()

router.get('/', Index)

export default router
