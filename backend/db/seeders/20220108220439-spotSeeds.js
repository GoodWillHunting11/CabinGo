'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Spots', [
        {
          userId: 1,
          address: '123 Cabin ln',
          city: 'Hochatown',
          state: 'Oklahoma',
          country: 'USA',
          title: 'The Red River Inn',
          description: 'large cabin with all the ammenities 2 miles from Broken Bow Lake',
          costPerNight: 250,
          guests: 12,
          beds: 7,
          baths: 6,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          address: '496 Lake Cabin rd',
          city: 'Hochatown',
          state: 'Oklahoma',
          country: 'USA',
          title: 'The Squirrel Fox',
          description: 'Small cabin nestled in the woods in northern Hotchatown',
          costPerNight: 165,
          guests: 4,
          beds: 2,
          baths: 2,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          address: '999 Rusty Bucket blvd',
          city: 'Hochatown',
          state: 'Oklahoma',
          country: 'USA',
          title: 'Bear-bnb',
          description: 'Located near the Ouachita trails sits a modern cabin with a view of the Lake',
          costPerNight: 165,
          guests: 8,
          beds: 5,
          baths: 5.5,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],{});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
