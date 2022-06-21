'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const usersList = [
      {
        username: 'usernameA',
      },
      {
        username: 'usernameB',
      },
      {
        username: 'usernameC',
      },
      {
        username: 'usernameD',
      },
    ];

    let users = await queryInterface.bulkInsert('users', usersList, {returning: true});

    const entiresList = [
      {
        type: 'Entire Apartment',
      },
      {
        type: 'Entire House',
      },
      {
        type: '1 Room',
      },
      {
        type: '1 Toilet Bowl',
      },
    ];

    let entires = await queryInterface.bulkInsert('entires', entiresList, {returning: true});

    const listingsList = [
      {
        title: 'Entire Apartment',
        price: 1500,
        no_of_beds: 5,
        location: 'Blk 857 Jurong West St 81',
        image_url: 'http://google.com',
        rating: 5,
        entire_id: entires[0].id,
        user_id: users[0].id,
      },
    ];

    await queryInterface.bulkInsert('listings', listingsList, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listings', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('entires', null, {});
  }
};
