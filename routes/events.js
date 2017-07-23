var express = require('express');
var router = express.Router();

function createRandomString(length) {
  let string = '';

  for (; string.length < length; string += Math.random().toString(36).substr(2));

  return string.substr( 0, length );
}

const events = [];


for(var i=1;i<4;i++)
{
  var obj = {id: i,name:"Event Type "+i};
  var data = [];
  for(var j=0;j<2;j++)
  {
    var dataObj = {timestamp:(Math.floor(Math.random()*10000000000)+1),raw:createRandomString(20)};
    data.push(dataObj);
  }
  obj.data = data;
  events.push(obj);
}
// @TODO generate 20 events, each with 50 pieces of data
/*
  event = {
    id: ,
    name: ,
    data: [
      {
        timestamp: ,
        raw:
      }
    ]
  }
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
 //const response = [{id:1,name:"Event 1"},{id:2,name:"Event 2"},{id:3,name:"Event 3"}];
    const response = [];
    console.log("events  "+events[0].name)
   for(var i=0; i<events.length; i++)
   {
     var newobj = {};
     newobj.id = events[i].id;
     newobj.name = events[i].name ;
     response.push(newobj);
   }
  // @TODO return an array of all events
  /*
    event = {
      id: ,
      name:
    }
  */
 console.log("I am here router------>"+(response));
  res.render('./index.html',{eventList:response});
  //res.json(response);

});

router.get('/:id', function(req, res, next) {
  console.log("in get method-->"+req.params.id)
  //res.render ('./index.html',{eventInformation:events[req.params.id]});
  res.json(events[req.params.id]);


});

module.exports = router;
