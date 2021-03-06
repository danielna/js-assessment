if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var arr = [];
        for (var key in obj){
            if (obj.hasOwnProperty(key)) {
                arr.push(key + ": " + obj[key]);
            }
        }
        return arr;
    }
  };
});
