import Product from '../models/Product';
import Category from '../models/Category';

class ProductController {
  async store(req, res) {
    const productExists = await Product.findOne({
      where: { sku: req.body.sku },
    });

    if (productExists) {
      return res.status(400).json({ error: 'SKU do produto já existe' });
    }

    const { id, sku, name, quantity, categories, price } = await Product.create(
      req.body
    );

    return res.json({ id, sku, name, quantity, categories, price });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async findAll(req, res) {
    await Product.findAll().then(product => {
      res.json(product);
    });
  }

  async findOne(req, res) {
    const product = await Product.findOne(req.body.id);

    return res.json(product);
  }
}

export default new ProductController();
