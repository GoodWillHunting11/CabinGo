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
          description: 'Sip your morning coffee or relax in the hot tub while enjoying the sunset on the covered deck! There is also a kids fort playground off the back deck for hours of entertainment .Chances are you’ll have the opportunity to watch the wildlife feeding too!',
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
          description: 'Bonfire View has a fully equipped full-size kitchen, as well as a dinning table that seats six guest. The cabin has two bedroom, a King size bed in the master and a queen size bed in the second bedroom, as well as two full size bathrooms.There is also a cot for extra sleeping space.',
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
          description: "As you enter the front door, you are welcomed with a cozy warmth to help you feel right at home. Downstairs holds a spacious king bed, while the climb upstairs by ladder ends in the loft area. Here you will find two separate twin beds with enough room to lounge on the bean bags and watch T.V. from above or play games.",
          costPerNight: 198,
          guests: 8,
          beds: 5,
          baths: 5.5,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          address: '1289 Meadow Ln',
          city: 'Hochatown',
          state: 'Oklahoma',
          country: 'USA',
          title: 'The Windward',
          description: "Equipped with a gorgeous loft with additional King bed, can lights and bean bag chairs. Walk into the living area and kitchen and you'll be greeted by huge windows that look out into the forest. Large designer futon couch , electric fireplace, and over-sized UHD Smart TV with Cable/DVD all provided for you. Kitchen is fully stocked with everything you'll need for your stay and includes an island for extra space for cooking and entertaining.",
          costPerNight: 150,
          guests: 6,
          beds: 3,
          baths: 2,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          address: '1945 Pine Creek Blvd',
          city: 'Hochatown',
          state: 'Oklahoma',
          country: 'USA',
          title: 'Five Feathers',
          description: "Welcome to Five Feathers. Five Feathers, completed in May of 2015, is a beautiful cabin built with a couple in mind. This cabin sleeps two comfortably, with an open floor plan. It offers a king size bed, and a bathroom containing a spacious shower with all linens provided.",
          costPerNight: 137,
          guests: 2,
          beds: 1,
          baths: 1,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          address: '1945 Pine Creek Blvd',
          city: 'Hochatown',
          state: 'Oklahoma',
          country: 'USA',
          title: 'Pinyon Pine',
          description: 'Are you looking for privacy mixed with convenience? Done. Pinyon Pine is centrally located, easy to find, and close to dining, shopping, & entertainment – some are even within a short walk from the cabin. Within just a few minutes you can go from the cabin to most local attractions and must-do destinations! But the great part is that when you are back at the cabin and want to separate from the on the go crowds and just slow down and enjoy the company of your own group – Pinyon Pine has you covered there as well.',
          costPerNight: 183,
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
          title: 'Cedar Ridge',
          description: 'Cedar Ridge the perfect escape to Nature! UNDER NEW OWNERSHIP! Newly Renovated and Updated with Modern/Design! This Cozy 2 Bedroom 2 Bathroom cabin is located at the end of a Dead end Road! Offering the feel of Seclusion being surrounded by the Towering Pines of the Ouchita National Forest!',
          costPerNight: 133,
          guests: 6,
          beds: 4,
          baths: 2,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          address: '999 Rusty Bucket blvd',
          city: 'Hochatown',
          state: 'Oklahoma',
          country: 'USA',
          title: 'Dream Weaver',
          description: 'Dream Weaver is a beautiful, romantic studio cabin. Perfect for honeymooners, anniversary celebrations, or small families! It has a nice outdoor living area fully equipped with gas grill, a hot tub, and a cozy conversation set to enjoy around the outdoor fireplace while listening to the bubbling creek that runs along the back of the cabin.',
          costPerNight: 221,
          guests: 4,
          beds: 1,
          baths: 1,
          zipCode: 74728,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],{});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
