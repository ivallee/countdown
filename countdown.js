var countdownGenerator = function (x) {
  var count = x;

  return function() {
    if (count > 0) {
      console.log("T-Minus " + count + '...');
    }
    if (count === 0) {
      console.log("Blast Off!");
    }
    if (count < 0) {
      console.log("Rockets already gone, bub!");
    }
    count = count - 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!