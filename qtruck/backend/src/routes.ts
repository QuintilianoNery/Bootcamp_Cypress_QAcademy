import { Router } from 'express';

import UsersController from './controllers/UsersController';
import FoodtrucksController from './controllers/FoodtrucksController';
import ReviewsController from './controllers/ReviewsController';

import HelpersController from './controllers/HelpersController';

const routes = Router();

//Rota criada para exclusão de novo usuário cadastrado
routes.delete('/helpers-reset', HelpersController.resetUser)

routes.post('/signup', UsersController.signup)
routes.post('/sessions', UsersController.sessions)
routes.get('/refresh', UsersController.refresh)

routes.post('/foodtrucks', UsersController.auth, FoodtrucksController.create);
routes.get('/foodtrucks', UsersController.auth, FoodtrucksController.list);
routes.get('/foodtrucks/:id', UsersController.auth, FoodtrucksController.unique);
routes.delete('/foodtrucks/:id', UsersController.auth, FoodtrucksController.remove);

routes.post('/foodtrucks/:id/review', UsersController.auth, ReviewsController.create);


export default routes;