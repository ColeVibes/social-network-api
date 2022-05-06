const router = require('express').Router();
 
const {
    getAllThoughts,
    createThought,
    createReaction,
    getThoughtById,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller')

// localhost:3001/api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;