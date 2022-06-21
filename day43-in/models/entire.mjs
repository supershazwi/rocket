export default function initEntireModel (sequelize, DataTypes) {
  return sequelize.define('entire', 
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING
    },
  },
  {
    underscored: true
  });
}


