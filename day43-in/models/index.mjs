import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';
import initListingModel from './listing.mjs';
import initUserModel from './user.mjs';
import initEntireModel from './entire.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const {Sequelize} = sequelizePackage;

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};

db.Listing = initListingModel(sequelize, Sequelize.DataTypes);
db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Entire = initEntireModel(sequelize, Sequelize.DataTypes);

db.Listing.belongsTo(User);
db.Listing.belongsTo(Entire);

db.User.hasMany(db.Listing);
db.Entire.hasOne(db.Listing);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;