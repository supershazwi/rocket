export default function initListingModel (sequelize, DataTypes) {
  return sequelize.define('listing', 
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    no_of_beds: {
      type: DataTypes.INTEGER
    },
    location: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    entire_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'entires',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
  },
  {
    underscored: true
  });
}


