'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('entires', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
    });

    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
    });

    await queryInterface.createTable('listings', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      no_of_beds: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      entire_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'entires',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('listings');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('entires');
  }
};
