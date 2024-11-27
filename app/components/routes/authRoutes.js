const express = require('express');
const { register, login, getUser } = require('../controllers/authControler');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getuser', getUser);
// router.put('/user/:id', updateUser);
// router.post('/logout', logout);
// router.post('/addProducts/:email', addProducts);


module.exports = router;
