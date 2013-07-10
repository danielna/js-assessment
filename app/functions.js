if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2){
            return str + ", " + str2;
        };
    },

    makeClosures : function(arr, fn) {
        return arr.map(function(a){
            return function() {
                return fn(a);
            };
        });
    },

    partial : function(fn, str1, str2) {
        return function(str){
            return fn(str1, str2, str);
        };
    },

    useArguments : function() {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(prev, current, index){
            return prev + current;
        });
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return fn.apply(null, args);

    },

    partialUsingArguments : function(fn) {
        var oldargs = Array.prototype.slice.call(arguments, 1);
        return function(){
            var newargs = Array.prototype.slice.call(arguments);
            return fn.apply(null, oldargs.concat(newargs));
        };
    },

    curryIt : function(fn) {
       console.log("WHEN WILL I USE CURRYING?");
    }
  };
});
