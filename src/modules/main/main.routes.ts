import { Router } from 'express'
import { Index } from './main.controller'
const router = Router()
router.get('/', Index)
export default router
