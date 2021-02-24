import * as Yup from 'yup';
import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    await Category.findAll().then(categories => {
      res.json(categories);
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      code: Yup.string().required(),
      label: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const { id, code, label } = await Category.create(req.body);

    return res.json({ id, code, label });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      code: Yup.string().required(),
      label: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação' });
    }

    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(400).json({ error: 'Sintaxe inválida' });
    }

    const { id, code, label } = await category.update(req.body);

    return res.json({ id, label });
  }

  async show(req, res) {
    const category = await Category.findByPk(req.params.id);

    return res.json(category);
  }
}

export default new CategoryController();
