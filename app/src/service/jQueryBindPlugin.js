const jQuery = require('jquery');

const container = require('./../core/container');

jQuery.fn.publish = function(eventName, params, domEvent) {
    let current = jQuery(this);

    current.on(domEvent || 'click', function(eventName, params, event) {
        params = params || {};

        params.event = event;

        container.get('emitter').emit(eventName, params);
    }.bind(current, eventName, params));

    return current;
};
