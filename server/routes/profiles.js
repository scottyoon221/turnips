'use strict';
const express = require('express');
const router = express.Router();
const { ProfileController, RoomController, MessageController } = require('../controllers');

router.route('/').get(ProfileController.getAll);
// .post(ProfileController.create)

router.route('/:id').get(ProfileController.getOne).put(ProfileController.update);
// .delete(ProfileController.deleteOne)

router.route('/:id/rooms').get(RoomController.getAll);


// OURS

router.route('/:id/friends').get();

router.route('/:id/directs/:toUserId/messages').get(MessageController.getDirectMessages);

module.exports = router;
