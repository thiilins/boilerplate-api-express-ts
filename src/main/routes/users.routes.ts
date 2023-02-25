import { Index } from '@modules/user/user.controller'
import { Router } from 'express'
const router = Router()
router.get('/', Index)
export default router
