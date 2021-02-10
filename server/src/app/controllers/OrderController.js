import * as Yup from 'yup';
import Order from '../models/Order';
import OrderProduct from '../models/OrderProduct';
import Product from '../models/Product';
import User from '../models/User';

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      products: Yup.array().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const user_id = req.userId;

    const order = await Order.create({
      user_id,
    });

    order.products = [];
    req.body.products.forEach(async element => {
      const order_product = await OrderProduct.create({
        order_id: order.id,
        product_id: element,
      });
      order.products.push(order_product);
    });

    return res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      total: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    return res.json({ ok: true });
  }

  async findAll(req, res) {
    await Order.findAll().then(orders => {
      res.json(orders);
    });
  }

  async findOne(req, res) {
    const order = await Order.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: OrderProduct,
          as: 'OrderProducts',
          include: [
            {
              model: Product,
              attributes: {
                exclude: ['createdAt', 'updatedAt'],
              },
            },
          ],
          attributes: {
            exclude: ['product_id', 'order_id'],
          },
        },
      ],
    });
    const user = await User.findByPk(req.userId);

    if (user.rank_id < 2 && Number(user.id) !== Number(order.user_id)) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    return res.json(order);
  }

  async findProducts(req, res) {
    const order = await Order.findByPk(req.params.id);
    const user = await User.findByPk(req.userId);

    if (user.rank_id < 2 && Number(user.id) !== Number(order.user_id)) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    const products = await OrderProduct.findAll({
      where: { order_id: req.params.id },
      include: [Product],
    });

    return res.json(products);
  }
}

export default new OrderController();
