const router = require('express').Router();
const path   = require('path');
const averageController =  require('../controllers/averageControlelr');

router.get('/',function(req,res){
    console.log("this is average service home route");
    res.send("this is average service home route ");
});

router.post('/average',averageController.average);

module.exports = router;