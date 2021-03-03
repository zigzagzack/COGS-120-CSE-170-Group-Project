var data = require('../data.json');

exports.view = function(req, res){
  console.log(data);
  res.render("entry", data);
};

exports.post = function(req, res){
  console.log("Posted!");
  console.log(req.body);
  console.log(data);
  data.entries.push(req.body);
  console.log(data);
};




