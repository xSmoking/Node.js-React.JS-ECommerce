import * as Yup from 'yup';
import User from '../models/User';
import Order from '../models/Order';

class UserController {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    if (user.rank_id < 2) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    const users = await User.findAll();
    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    const { id, name, email, rank_id } = await User.create(req.body);

    return res.json({ id, name, email, rank_id });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(8),
      password: Yup.string()
        .min(8)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    const { id, name, rank_id } = await user.update(req.body);

    return res.json({ id, name, email, rank_id });
  }

  async show(req, res) {
    const user = await User.findByPk(req.userId);

    if (user.rank_id < 2 && Number(req.userId) !== Number(req.params.id)) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    return res.json(user);
  }

  async findOrders(req, res) {
    const user = await User.findByPk(req.userId);

    if (user.rank_id < 2 && Number(req.userId) !== Number(req.params.id)) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    const orders = await Order.findOne({ where: { user_id: req.params.id } });
    return res.json(orders);
  }
}

export default new UserController();
