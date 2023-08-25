const express = require('express');
const router = express.Router();
const contactController = require('./contactController');

router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getAllContacts);
router.get('/contacts/:search_char', contactController.search_contacts);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;