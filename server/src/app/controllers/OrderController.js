import Order from '../models/Order';
import OrderProduct from '../models/OrderProduct';
import User from '../models/User';

class OrderController {
  async store(req, res) {
    const { id, status, total } = await Order.create(req.body);

    return res.json({ id, status, total });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async findAll(req, res) {
    await Order.findAll().then(orders => {
      res.json(orders);
    });
  }

  async findOne(req, res) {
    const order = await Order.findByPk(req.params.id);
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
    });

    return res.json(products);
  }
}

export default new OrderController();
