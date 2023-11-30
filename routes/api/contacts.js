const express = require('express');
const ctrl = require('../../controllers/contacts');
const router = express.Router();
const { validateBody, isValidId } = require('../../middlewares');
const { schemas } = require('../../models/contact');

router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateBody(schemas.addSchema), ctrl.postContact);

router.delete('/:contactId', isValidId, ctrl.deleteContact);

router.put(
  '/:contactId',
  validateBody(schemas.putSchema),
  isValidId,
  ctrl.putContact
);
router.patch(
  '/:contactId',
  validateBody(schemas.patchSchema),
  isValidId,
  ctrl.patchFavorite
);

module.exports = router;
