'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          spotId: 1,
          url: "https://www.sundowncabinrentals.com/images/old_site/cabins/logans_bluff/59375bce-5ff7-42a5-9264-4afb1aeb3cf3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          url: "https://cdn.liverez.com/5/13922/1/164422/800/1.jpg?v=1/24/2020%206:16:53%20PM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-53046408/original/b6d06128-28d5-44c3-a770-25f944f16a6f.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 4,
          url: "https://static.wixstatic.com/media/ca24b0_cd088ae7d2c64b5784f8d50c0e0ed3c9~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_1000,h_750,al_c,q_90,usm_0.66_1.00_0.01/ca24b0_cd088ae7d2c64b5784f8d50c0e0ed3c9~mv2_d_4032_3024_s_4_2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 5,
          url: "https://img.trackhs.com/x1080/https://track-pm.s3.amazonaws.com/brokenbowcabinlodging/image/9f9b84ed-a625-43f6-b0b5-117fabd23af6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 6,
          url: "https://media.vrbo.com/lodging/31000000/30300000/30298900/30298884/854e74ec.c10.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 7,
          url: "https://www.letsgobrokenbow.com/wp-content/uploads/2020/12/db2e9a6b-eede-4a26-ac3a-5941cbfc592a.c10-735x405.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 8,
          url: "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/ca/56/ad.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
