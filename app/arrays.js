if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(prev, current, index) {
            return prev += current;
        });
    },

    remove : function(arr, item) {
        return arr.filter(function(el, i){
            return (el !== item);
        });
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length-1; i >= 0; i--){
            if (arr[i] === item){
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        return Array.prototype.concat(item, arr);
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return Array.prototype.concat(arr1, arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(el, index) {
            if (el === item){
                count++;
            }
        });
        return count;

    },

    duplicates : function(arr) {
        var dupes = [];
        arr.forEach(function(el, index) {
            if (arr.indexOf(el) !== index && dupes.indexOf(el) === -1) {
                dupes.push(el);
            }
        });
        return dupes;
    },

    square : function(arr) {
        return arr.map(function(el, index){
            return el*el;
        });
    },

    findAllOccurrences : function(arr, target) {
        var pos = [];

        arr.forEach(function(el, index){
            if (el === target){
                pos.push(index);
            }
        });

        return pos;

    }
  };
});
