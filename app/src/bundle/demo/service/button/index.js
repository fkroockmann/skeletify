const jQuery = require('jquery');

const btnTpl = require('./template/button.tpl');

module.exports.onConfigReady = () => {
    jQuery('.button-container').append(jQuery(btnTpl).publish('demo:button:click'));
};

module.exports.onButtonClick = () => {
    alert('click !');
};
