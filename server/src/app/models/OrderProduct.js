import { Model, Sequelize } from 'sequelize';

class OrderProduct extends Model {
  static init(sequelize) {
    super.init(
      {
        order_id: Sequelize.INTEGER,
        product_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: 'order_id' });
    this.belongsTo(models.Product, { foreignKey: 'product_id' });
  }
}

export default OrderProduct;
