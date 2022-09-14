import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

router.get('/test', (req, res) => {
  return res.json({ surprise: '😍' })
})

export default router
