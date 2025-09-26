import express from 'express'
import homeController from '../controller/homeController.js'
import skillController from '../controller/skillController.js'
import contactController from '../controller/contactController.js'
import serviceController from '../controller/serviceController.js'

const router=express.Router()

router.get('/',homeController)
router.get('/skill',skillController)
router.get('/contact',contactController)
router.get('/service',serviceController)

export default router