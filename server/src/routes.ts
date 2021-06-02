import { Router } from 'express';

import { UsersController } from './accounts/controllers/UsersController'

const routes = Router();

const usersController = new UsersController()

routes.post('/user', usersController.create)
routes.get('/login', usersController.showUsers)

export { routes };
