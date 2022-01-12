'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'andres@user.io',
        username: 'Andres',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'ken@user.io',
        username: 'Kenneth_Dodson-Knapp',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@demo.com',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'eric@user.io',
        username: 'Eric_Cortez',
        hashedPassword: bcrypt.hashSync('password'),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
