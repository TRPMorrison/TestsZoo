var Zoo = function () {

  this.animals = [];

};


var Animal = function (options) {

  var args = options || {};

  this.name = args.name;
  this.species = args.species;
  this.age = args.age;
  this.status = args.status;

};

Animal.prototype.this.escape = function () {
  this.status = 'escaped';
};
