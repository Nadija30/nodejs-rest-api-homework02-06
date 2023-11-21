const express = require('express');
const ctrl = require('../../controllers/contacts');
const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', ctrl.postContact);

router.delete('/:contactId', ctrl.deleteContact);

router.put('/:contactId', ctrl.putContact);

module.exports = router;
