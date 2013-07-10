if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    return {
        listFiles: function(data, dirName) {
            // console.log('original_data:', data);
            function getFiles(previous, data, isMatchedDir) {
                if (data.files) {
                    for (var key in data.files) {
                        var file = data.files[key];
                        // If the current directory is a match or it's a descendant from a matched directory
                        var dirMatch = (data.dir === dirName || isMatchedDir);
                        if (file.files) {
                            // console.log('recurse file:', file);
                            // console.log('recurse previous:', previous);
                            if (dirMatch) {
                                getFiles(previous, file, true);
                            } else {
                                getFiles(previous, file);
                            }

                        } else {
                            // console.log('previous.push file:', file);
                            if (!dirName) {
                                previous.push(file);
                            } else if (data.dir === dirName || dirMatch) {
                                previous.push(file);
                            }
                        }
                    }
                }
                // console.log('return:', previous);
                return previous;
            }
            return getFiles([], data);
        },

        permute: function(arr) {
            var perms = [],
                used = [];

            var head = arr[0];
        }
    };
});