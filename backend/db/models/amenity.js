'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    spotId: DataTypes.INTEGER,
    parking: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    pets: DataTypes.BOOLEAN,
    hotTub: DataTypes.BOOLEAN,
    boardGames: DataTypes.BOOLEAN,
    kitchen: DataTypes.BOOLEAN,
    fireplace: DataTypes.BOOLEAN,
    BBQgrill: DataTypes.BOOLEAN
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
    Amenity.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Amenity;
};
