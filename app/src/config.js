module.exports = {
    'events': {
        'config:ready': [
            {
                'callback': () => {
                    require('./service/jQueryBindPlugin');
                },
            },
        ],
    },
    'bundles': {
        'demo': require('./bundle/demo/config'),
    },
};
