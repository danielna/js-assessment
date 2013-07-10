if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var re = /\d/;
        return re.test(str);
    },

    containsRepeatingLetter : function(str) {
        // got this off the web; still don't understand the () or \1
        var re = /([A-Za-z])\1/;
        return re.test(str);
    },

    endsWithVowel : function(str) {
        var re = /([aeiou])$/i;
        return re.test(str);
    },

    captureThreeNumbers : function(str) {
        var re = /\d{3}/;
        var val = re.exec(str);
        return (val) ? val[0] : false;
    },

    matchesPattern : function(str) {
        var re = /\b\d\d\d-\d\d\d-\d\d\d\d$/;
        return re.test(str);
    },
    isUSD : function(str) {
        
    }
  };
});
