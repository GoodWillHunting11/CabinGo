'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    costPerNight: DataTypes.INTEGER,
    guests: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    baths: DataTypes.INTEGER,
    zipCode: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, {foreignKey: 'userId'})
    Spot.hasMany(models.Review, {foreignKey: 'spotId'})
    Spot.hasMany(models.Booking, {foreignKey: 'spotId'})
    Spot.hasMany(models.Amenity, {foreignKey: 'spotId'})
    Spot.hasMany(models.Image, {foreignKey: 'spotId'})
  };
  return Spot;
};
