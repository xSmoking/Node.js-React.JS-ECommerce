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
}

export default Category;
