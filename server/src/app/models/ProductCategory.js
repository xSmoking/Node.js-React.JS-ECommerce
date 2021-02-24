import { Model, Sequelize } from 'sequelize';

class ProductCategory extends Model {
  static init(sequelize) {
    super.init(
      {
        product_id: Sequelize.INTEGER,
        category_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product',
    });
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default ProductCategory;
