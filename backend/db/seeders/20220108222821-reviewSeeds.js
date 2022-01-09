'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 2,
          spotId: 1,
          rating: 4,
          review: 'this place was pretty nice but one of the stairs was squeaky.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          spotId: 2,
          rating: 5,
          review: 'very close to the lake, worth the trip from Seattle.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          spotId: 3,
          rating: 3.2,
          review: 'Did not look like the pictures online. The trails were nice but that was it.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
