if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var interval;
        var self = this;

        var go = function() {
            console.log(start);
            interval = setInterval(function(){
                plus();
            }, 100);
        };

        var plus = function() {
            start++;
            console.log(start);
            // nums.push(start);
            // window.alert('start: ' + start);
            if (start === end){
                self.cancel();
            }
        };

        this.cancel = function() {
            window.clearInterval(interval);
        };

        go();
    }
  };
});