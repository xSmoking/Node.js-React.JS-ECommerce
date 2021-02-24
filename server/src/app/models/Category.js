import { Model, Sequelize } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        code: Sequelize.STRING,
        label: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ProductCategory, { foreignKey: 'category_id' });
  }
}

export default Category;
