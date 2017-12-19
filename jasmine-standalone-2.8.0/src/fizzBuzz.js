var JavaBuzz = function(){};

JavaBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
};

JavaBuzz.prototype.says = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return "JavaBuzz";
  }
  if (this._isDivisibleBy(3, number)) {
    return "Java";
  }
  if (this._isDivisibleBy(5, number)) {
    return "Buzz";
  }
  else {
    return number
  };
};

var javabuzz = new JavaBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(javabuzz.says(i));
}
