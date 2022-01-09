'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          spotId: 1,
          url: 'https://beaversbendadventures.com/wp-content/uploads/2020/10/Broken-Bow-Vacation-Cabins.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          url: 'https://www.sundowncabinrentals.com/images/old_site/cabins/logans_bluff/59375bce-5ff7-42a5-9264-4afb1aeb3cf3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          url: 'https://cdn.liverez.com/5/13922/1/164418/800/1.jpg?v=6/22/2021%2010:09:24%20PM',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
