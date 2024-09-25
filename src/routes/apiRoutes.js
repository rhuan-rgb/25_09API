const userController = require('../controller/userController')

const router = require('express').Router()

router.post('/user',userController.createUser);

router.get('/user',userController.getAllUsers);

router.delete('/user', userController.deleteUser);

router.put('/user', userController.updateUser);

router.delete('/user/:cpf', userController.deleteUser);

module.exports = router

