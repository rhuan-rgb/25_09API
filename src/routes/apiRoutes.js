const organizadorController = require('../controller/organizadorController');
const userController = require('../controller/userController');

const router = require('express').Router()

//rotas do usuario

router.post('/user',userController.createUser);

router.get('/user',userController.getAllUsers);

router.delete('/user', userController.deleteUser);

router.put('/user', userController.updateUser);

router.delete('/user/:cpf', userController.deleteUser);

//rotas do organizador

router.post('/organizador', organizadorController.createOrganizador);

router.put('/organizador', organizadorController.updateOrganizador);

router.get('/organizador', organizadorController.getAllOrganizador);

router.delete('/organizador/:id', organizadorController.deleteOrganizador);

module.exports = router;

