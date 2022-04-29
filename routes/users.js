var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  products = [{
    image:"data:image/jpeg;base64,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",
    name:'iphone 11',
    catagoty:'mobile'
    },{
    image:"data:image/jpeg;base64,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",
    name:'iphone 12',
    catagoty:'mobile'},
    {
    image:"data:image/jpeg;base64,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",
    name:'iphone 13',
    catagoty:'mobile'
    }, {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMR6X4mVrx5El9sFZ2z99J6UbyF0RUzNVFZQ&usqp=CAU",
    name:'iphone 14',
    catagoty:'mobile'
    }
  ]
  res.render('index',{products,admin:false});
});

module.exports = router;