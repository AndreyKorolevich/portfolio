import express from 'express'
import { signin, signup, googleSign } from '../controllers/user'

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/google', googleSign)
// router.post('/update', update)
// router.post('/image', updateUserImage)

export default router