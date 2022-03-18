const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const { Review, User } = require('../../db/models')
const router = express.Router()

const reviewForm = [
    check('rating')
        .exists({ checkFalsy: true }),
    check('review')
        .exists({ checkFalsy: true }),
    handleValidationErrors,
];

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

router.put('/:id',
    requireAuth,
    reviewForm,
    asyncHandler(async (req, res) => {

        const reviewId = parseInt(req.params.id, 10);
        console.log('reviewIDDDD', reviewId)
        const currReview = await Review.findByPk(reviewId);
        console.log("id-------->", currReview)

        const { rating, review} = req.body

        const newReview = {
            id: reviewId,
            rating,
            review
        }
        const updatedReview = await currReview.update(newReview)
        console.log(updatedReview)
        return res.json({
            updatedReview
        })
    }))


router.delete('/:id',
asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const currReview = await Review.findByPk(reviewId)
    await currReview.destroy()

    res.json({ message: "Delete Successful", id: currReview.id });
}));


module.exports = router;
