import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import OrderController from './app/controllers/OrderController';
import RankController from './app/controllers/RankController';
import CategoryController from './app/controllers/CategoryController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.get('/products/category/:id', ProductController.findByCategory);
routes.get('/products/:id', ProductController.show);
routes.get('/products/:id/categories', ProductController.findCategories);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users/:id', UserController.show);
routes.get('/users/:id/orders', UserController.findOrders);

routes.post('/orders', OrderController.store);
routes.put('/orders', OrderController.update);
routes.get('/orders', OrderController.findAll);
routes.get('/orders/:id', OrderController.findOne);
routes.get('/orders/:id/products', OrderController.findProducts);

routes.get('/products', ProductController.index);

routes.use(adminMiddleware);

routes.get('/users', UserController.index);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
// routes.delete('/products/:id', ProductController.delete);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.get('/categories/:id', CategoryController.show);

routes.post('/ranks', RankController.store);
routes.put('/ranks/:id', RankController.update);
routes.get('/ranks', RankController.index);
routes.get('/ranks/:id', RankController.show);

routes.post('/files', upload.single('file'), FileController.store);

/* routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ file: req.file });
}); */

export default routes;
