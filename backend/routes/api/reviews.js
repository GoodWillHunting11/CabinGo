const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const { Review, User } = require('../../db/models')
const router = express.Router()

router.get('/:id', asyncHandler(async (req, res) => {
    const spotId = parseInt(req.params.id, 10)
    const reviews = await Review.findAll({
        where: {
            spotId
        },
        include: [User],
        order: [['createdAt', 'ASC']]
    })

    return res.json(reviews)
}))

router.post('/',
requireAuth,
asyncHandler(async (req, res) => {
    const { userId, spotId, rating, review } = req.body
    const newReview = {
        userId,
        spotId,
        rating,
        review,
    }
    const createdReview = await Review.create(newReview)
    return res.json(createdReview)
}))

module.exports = router;
