const start = () => {
    let container = require('./core/container');
    let configHandler = require('./core/configHandler');
    let Emitter = require('events').EventEmitter;

    container.set('emitter', new Emitter());

    configHandler.init(require('./config'));
};

if (document.readyState === 'complete' || document.readyState === 'loaded') {
    start();
} else {
    document.addEventListener('DOMContentLoaded', start);
}
