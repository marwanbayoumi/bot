module.exports = {
    general: {
        name: '!eatura',
        execute(msg, args) {
            msg.reply('Eatura is still not ready.');
        }
    },
    about: {
        name: '!about',
        execute(msg, args) {
            msg.reply('States if eatura is ready for Omar');
        },
    }
}