import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import User from '../app/models/User';
import Product from '../app/models/Product';
import Order from '../app/models/Order';
import OrderProduct from '../app/models/OrderProduct';
import Category from '../app/models/Category';
import Rank from '../app/models/Rank';

const models = [User, Product, Order, OrderProduct, Category, Rank];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);

    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
