module.exports = {
    'events': {
        'config:ready': [
            {'callback': require('./service/button').onConfigReady},
        ],
        'demo:button:click': [
            {'callback': require('./service/button').onButtonClick},
        ],
    },
};
