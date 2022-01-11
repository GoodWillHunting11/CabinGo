const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image, Amenity } = require('../../db/models');
const router = express.Router();


// USE FOR VALIDATIONS LATER
// const validateLogin = [
//     check('credential')
//         .exists({ checkFalsy: true })
//         .notEmpty()
//         .withMessage('Please provide a valid email or username.'),
//     check('password')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a password.'),
//     handleValidationErrors,
// ];


// GET  SPOTS - all the spots

router.get("/", asyncHandler(async (req, res) => {
    const spots = await Spot.findAll({
        include: [Image, Amenity, User]
    })
        // console.log('spots', spots)
    // console.log('with images', spots[0].Images[0].url)
    return res.json(spots)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10)
    const spot = await Spot.findByPk(spotId, {
        include: [Image, Amenity, User]
    })
    // console.log('spots', spot.User['dataValues'].username)
    return res.json(spot)
}))

router.get('/host', asyncHandler(async (req,res) => {
    return res.send('cabin form')
}))

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
       // await setTokenCookie(res, id);
       return res.json({
           id
       })
   }))

module.exports = router;
