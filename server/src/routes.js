import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import OrderController from './app/controllers/OrderController';
import RankController from './app/controllers/RankController';
import CategoryController from './app/controllers/CategoryController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.findAll);
routes.get('/users/:id', UserController.findOne);
routes.get('/users/:id/orders', UserController.findOrders);

routes.post('/orders', OrderController.store);
routes.put('/orders', OrderController.update);
routes.get('/orders', OrderController.findAll);
routes.get('/orders/:id', OrderController.findOne);
routes.get('/orders/:id/products', OrderController.findProducts);

routes.use(adminMiddleware);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.get('/products', ProductController.findAll);
routes.get('/products/:id', ProductController.findOne);
// routes.delete('/products/:id', ProductController.delete);

routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.get('/categories', CategoryController.findAll);
routes.get('/categories/:id', CategoryController.findOne);

routes.post('/ranks', RankController.store);
routes.put('/ranks/:id', RankController.update);
routes.get('/ranks', RankController.findAll);
routes.get('/ranks/:id', RankController.findOne);

export default routes;
