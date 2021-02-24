import * as Yup from 'yup';
import Rank from '../models/Rank';

class RankController {
  async index(req, res) {
    await Rank.findAll().then(orders => {
      res.json(orders);
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      label: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const { id, label } = await Rank.create(req.body);

    return res.json({ id, label });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      label: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const rank = await Rank.findByPk(req.params.id);

    if (!rank) {
      return res.status(400).json({ error: 'Sintaxe inválida' });
    }

    const { id, label } = await rank.update(req.body);

    return res.json({ id, label });
  }

  async show(req, res) {
    const rank = await Rank.findByPk(req.params.id);

    return res.json(rank);
  }
}

export default new RankController();
