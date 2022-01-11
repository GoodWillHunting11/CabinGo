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
          url: 'https://cdn.liverez.com/5/13922/1/164422/800/1.jpg?v=1/24/2020%206:16:53%20PM',
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
