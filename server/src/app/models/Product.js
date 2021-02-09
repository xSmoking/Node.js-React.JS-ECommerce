import { Model, Sequelize } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        sku: Sequelize.STRING,
        name: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        price: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Product;
