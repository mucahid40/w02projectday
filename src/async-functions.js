module.exports.giveItBackLater = function giveItBackLater(value, callback) {
    setTimeout(3000).then(callback(value))
}

module.exports.promiseToGiveItBackLater = function promiseToGiveItBackLater(value) {
}