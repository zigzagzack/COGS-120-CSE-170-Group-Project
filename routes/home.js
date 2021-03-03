var data = require('../data.json');

exports.view = function(req, res){
  res.render("home",data);
};

exports.viewAlt = function(req, res){
  var name = req.params.name;
  console.log("the name is " + name);
  res.render("home",{
    "name":name
  });
}
