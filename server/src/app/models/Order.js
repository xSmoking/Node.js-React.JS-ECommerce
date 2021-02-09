import { Model, Sequelize } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        status: Sequelize.INTEGER,
        total: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.OrderProduct, { foreignKey: 'order_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default Order;
