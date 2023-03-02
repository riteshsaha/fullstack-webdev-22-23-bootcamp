// Exporting named functions
// Can use both  exports or module.exports
exports.getDay = getDay;


// Two ways of writing functions in NodeJS
//Anonymous function exported
module.exports.getDate = function () {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return new Date().toLocaleDateString("en-US", options);
}

function getDay() {
    let options = {
        weekday: "long",
    };
    return new Date().toLocaleDateString("en-US", options);
}

// When it is called via require in another js, this js content is rendered.
console.log(module);