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
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));

    /* models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models)); */
  }
}

export default new Database();
