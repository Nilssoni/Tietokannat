var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/second',function(request,response) {
  response.send('im second route');
  console.log('second');
});

router.get('/third/:name',function(request,response) {
  response.send('Hello '+request.params.name);
  console.log(request.params.name);
});

router.get('/fourth/:fname/:lname',function(request,response) {
  response.send('Hello '+request.params.fname+ ' '+request.params.lname);
  console.log(request.params.fname+' '+request.params.lname);
});

router.post('/',function(request,response){
  response.send(request.body.fname+' '+request.body.lname);
  console.log(request.body.fname+' '+request.body.lname);
});

router.put('/:id',function(request,response){
  response.send('To person '+request.params.id+' change name to '
  +request.body.fname+' '+request.body.lname);
  
  console.log(request.body.fname+' '+request.body.lname);
});

module.exports = router;
