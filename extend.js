function extend(target) {
    Array.prototype.slice.call(arguments, 1).forEach(function(source) {
        source && Object.getOwnPropertyNames(source).forEach(function(name) {
            if (typeof source[name] === 'object' && target[name]) {
                extend.call(target, target[name], source[name]);
            } else {
                target[name] = source[name];
            }
        });
    });

    return target;
}

module.exports = extend;