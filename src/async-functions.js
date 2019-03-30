module.exports.giveItBackLater = function giveItBackLater(value, callback) {
    //use settimeout on a function so that the function doesnt get returned right away was the idea but didnt really work out 
    setTimeout(withSetTimeOut(), 3000);
    function withSetTimeOut() {
        callback(value);
    }
};

module.exports.promiseToGiveItBackLater = function promiseToGiveItBackLater(value) {
};

module.exports.addSomePromises = function addSomePromises(params) {
    
};

// at this point my brain was too fried to even think straight so if something was really easy or simple and i couldnt do it im sorry
// that being said i didnt even go outside today and missed the whole 19C weather so im not really sorry
// to be honest im proud that i didnt go outside and stuck to my homework talk about dedication (hell yeah im gloating)