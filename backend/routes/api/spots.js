const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Image } = require('../../db/models');
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
        include: {
            model: Image
        }
    })
    // console.log('with images', spots[0].Images[0].url)
    return res.json(spots)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10)
    const spot = await Spot.findByPk(spotId, {
        include: [Image]
    })
    return res.json(spot)
}))

router.get('/host', asyncHandler(async (req,res) => {
    return res.send('cabin form')
}))

router.post('/host',
 requireAuth,
 asyncHandler(async (req, res) => {
    const id = await Spot.create(req.body['spot'])
    const newImageUrl = {
        url: req.body['image'].url,
        spotId: id.id
    }
    const newImage = await Image.create(newImageUrl)
    return res.json({id})
}))
//this is a comment dkkdkdkdkdk
module.exports = router;
