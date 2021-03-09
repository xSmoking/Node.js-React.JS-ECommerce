import Product from '../models/Product';
import ProductCategory from '../models/ProductCategory';
import Category from '../models/Category';

class ProductController {
  async index(req, res) {
    await Product.findAll().then(product => {
      res.json(product);
    });
  }

  async store(req, res) {
    const productExists = await Product.findOne({
      where: { sku: req.body.sku },
    });

    if (productExists) {
      return res.status(400).json({ error: 'SKU do produto já existe' });
    }

    const {
      id,
      sku,
      name,
      quantity,
      categories,
      price,
      image,
      image_base64,
    } = await Product.create(req.body);

    return res.json({
      id,
      sku,
      name,
      quantity,
      categories,
      price,
      image,
      image_base64,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async show(req, res) {
    const product = await Product.findOne({
      where: { id: req.params.id },
    });

    return res.json(product);
  }

  async findCategories(req, res) {
    const categories = await ProductCategory.findAll({
      where: { product_id: req.params.id },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: {
            exclude: ['id'],
          },
        },
      ],
      attributes: {
        exclude: ['product_id', 'category_id'],
      },
    });

    return res.json(categories);
  }

  async findByCategory(req, res) {
    const limit = req.query.limit === undefined ? 1000 : req.query.limit;
    const products = await ProductCategory.findAll({
      where: { category_id: req.params.id },
      include: {
        model: Product,
        as: 'product',
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      limit: Number(limit),
    });

    const prods = [];
    products.forEach(element => {
      prods.push(element.product);
    });

    return res.json(prods);
  }
}

export default new ProductController();
