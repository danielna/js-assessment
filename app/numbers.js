if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var binary = num.toString(2);
        return parseInt(binary.charAt(binary.length - bit), 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var output = num.toString(2);
        while (output.length < 8) {
            output = "0" + output;
        }
        return output;
    },

    multiply: function(a, b) {
        function decLength(num) {
            num = num.toString();
            return num.length - 1 - num.indexOf('.');
        }
        var aL = decLength(a),
            bL = decLength(b);

        var length = (aL > bL) ? aL : bL;
        return parseFloat((a * b).toFixed(length));
    }
  };
});

