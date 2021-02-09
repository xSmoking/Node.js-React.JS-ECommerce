import { Model, Sequelize } from 'sequelize';

class Rank extends Model {
  static init(sequelize) {
    super.init(
      {
        label: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'rank_id' });
  }
}

export default Rank;
