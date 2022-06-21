export default function initUserModel (sequelize, DataTypes) {
  return sequelize.define('user', 
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING
    },
  },
  {
    underscored: true
  });
}


