const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


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
    console.log('with images', spots[0].Images[0].url)
    return res.json(spots)
}))




module.exports = router;
