const container = require('./container');

let emitter;

const handleEvents = function(config = {}) {
    for (let eventName in config) {
        if (config.hasOwnProperty(eventName)) {
            for (let key in config[eventName]) {
                if (config[eventName].hasOwnProperty(key)) {
                    let event = config[eventName][key];

                    if (typeof event.callback === 'function') {
                        emitter.addListener(eventName, event.callback);
                    }
                }
            }
        }
    }
};

const handleBundles = function(config = {}) {
    for (let key in config) {
        if (config.hasOwnProperty(key)) {
            handleEvents(config[key].events);
        }
    }
};

module.exports.init = function(config = {}) {
    emitter = container.get('emitter');

    handleEvents(config.events);
    handleBundles(config.bundles);

    emitter.emit('config:ready');
};
