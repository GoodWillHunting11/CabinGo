'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Amenities', [
        {
          spotId: 1,
          parking: true,
          wifi: true,
          pets: true,
          hotTub: true,
          boardGames: true,
          kitchen: true,
          fireplace: true,
          BBQgrill: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          parking: true,
          wifi: true,
          pets: false,
          hotTub: true,
          boardGames: false,
          kitchen: true,
          fireplace: true,
          BBQgrill: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          parking: false,
          wifi: false,
          pets: false,
          hotTub: false,
          boardGames: true,
          kitchen: true,
          fireplace: true,
          BBQgrill: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Amenities', null, {});
  }
};
