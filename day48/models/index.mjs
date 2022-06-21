import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import initCategoryModel from './category.mjs';
import initItemModel from './item.mjs';

const {Sequelize} = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];

const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Item = initItemModel(sequelize, Sequelize.DataTypes);
db.Category = initCategoryModel(sequelize, Sequelize.DataTypes);

db.Category.hasMany(db.Item);
db.Item.belongsTo(db.Category);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;