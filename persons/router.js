const express = require('express');
const router = express.Router();
const PersonController = require('./controller.js');

// Define routes
router.route('/')
    .get(PersonController.index)
    .post(PersonController.store)

router.route('/:user_id')
    .get(PersonController.show)
    .put(PersonController.update)
    .delete(PersonController.destroy);

module.exports = router;