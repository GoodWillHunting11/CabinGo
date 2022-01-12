const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image, Amenity } = require('../../db/models');
const router = express.Router();


//GET ALL ROUTE

router.get("/", asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        include: [Image, Amenity, User]
    })
    return res.json(spots)
}))


//GET ONE ROUTE

router.get('/:id', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10)
    const spot = await Spot.findByPk(spotId, {
        include: [Image, Amenity, User]
    })

    return res.json(spot)
}))


//POST ROUTE

router.post('/host',

    requireAuth,
    asyncHandler(async (req, res) => {
       const { image, spots, amenities } = req.body
       const id = await Spot.create(spots)
       const newImageUrl = {
           spotId: id.id,
           url: image.url
       }
       await Image.create(newImageUrl)
       const newAmenityList = {
           spotId: id.id,
           kitchen: amenities.kitchen,
           boardGames: amenities.boardGames,
           fireplace: amenities.fireplace,
           parking: amenities.parking,
           wifi: amenities.wifi,
           hotTub: amenities.hotTub,
           pets: amenities.pets,
           BBQgrill: amenities.BBQgrill
       }
       await Amenity.create(newAmenityList)
       return res.json({
           id
       })
   }))


   //EDIT ROUTE

   router.put('/:id/host',
   requireAuth,
   asyncHandler(async (req, res) => {
       console.log("here")
       const spotId = parseInt(req.params.id, 10);
       const currSpot = await Spot.findByPk(spotId);

       const { image, spots, amenities } = req.body
       const id = await currSpot.update(spots)

               const newImageUrl = {
                   id: image.id,
                   spotId: id.id,
                   url: image.url
               }

       const currImage = await Image.findByPk(image.id);
       await currImage.update(newImageUrl)

       const newAmenityList = {
    spotId: id.id,
    kitchen: amenities.kitchen,
    boardGames: amenities.boardGames,
    fireplace: amenities.fireplace,
    parking: amenities.parking,
    wifi: amenities.wifi,
    hotTub: amenities.hotTub,
    pets: amenities.pets,
    BBQgrill: amenities.BBQgrill
}

       const currAmenity = await Amenity.findByPk(amenities.id)
       await currAmenity.update(newAmenityList);
       return res.json({id})
   }))


   //DELETE ROUTE

   router.delete('/:id', asyncHandler(async (req, res) => {
    console.log("DELETE ROUTE","HIIIIII");
    const { id, Images, Amenities } = req.body
    const spotId = parseInt(req.params.id, 10);
    const imageId = Images[0].id;
    const amenitiesId = Amenities[0].id;

    const currSpot = await Spot.findByPk(spotId);
    const currImage = await Image.findByPk(imageId);
    const currAmenity = await Amenity.findByPk(amenitiesId);

    console.log("DELETE BODY SPOT ====>", currSpot)
    console.log("DELETE BODY Image ===>", currImage)
    console.log("DELETE BODY Amenities ===> ", currAmenity)


    if (currSpot && currImage && currAmenity) {
        await currAmenity.destroy();
        await currImage.destroy();
        await currSpot.destroy();

        res.json({ message: "Delete Successful" });
    } else {
        console.log('unsuccessful');
    }

    res.json({ message: "Delete Unsuccessful" });
}));


 requireAuth,
 asyncHandler(async (req, res) => {
    const id = await Spot.create(req.body['spot'])
    const newImageUrl = {
        url: req.body['image'].url,
        spotId: id.id
    }
    const newImage = await Image.create(newImageUrl)
    return res.json({id})
})

module.exports = router;
