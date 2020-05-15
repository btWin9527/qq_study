var Runoob;
(function (Runoob) {
  var Calc = (function () {
    function Calc() {

    }
  })
  Calc.prototype.doSum = function (limit) {
    var sum = 0;
    for (var i = 0; i <= limit; i++) {
      sum += i;
    }
    return sum;
  }
  Runoob.Calc = Calc;
  return Calc;
})(Runoob || (Runoob = {}));
var test = new Runoob.Calc();
