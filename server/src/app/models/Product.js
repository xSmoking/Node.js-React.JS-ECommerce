import { Model, Sequelize } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        sku: Sequelize.STRING,
        name: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        price: Sequelize.INTEGER,
        image: Sequelize.TEXT,
        image_base64: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ProductCategory, {
      foreignKey: 'product_id',
      as: 'categories',
    });
    this.hasMany(models.OrderProduct, {
      foreignKey: 'product_id',
      as: 'orders',
    });
  }
}

export default Product;
