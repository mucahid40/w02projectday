module.exports.groupAdultsByAgeRange = function groupAdultsByAgeRange(object) {
    return object.reduce((acc, item)=> {
        //if age is less and equal to 20 and bigger and equal to 18
        if (item.age <= 20 && item.age >= 18) {
            //push that item which goes into the accumulator what starts with some arrays instead of numbers(second set curly braces) to the 20 and younger array
            acc["20 and younger"].push(item);
        } else if (item.age > 20 && item.age <= 30) {
            acc["21-30"].push(item);
        } else if (item.age > 30 && item.age <= 40) {
            acc["31-40"].push(item);
        } else if (item.age > 40 && item.age <= 50) {
            acc["41-50"].push(item);
        } else if (item.age > 50) {
            acc["51 and older"].push(item);
        } else if (item.length === 0){
            return {};
        } else {
            item.pop;
        }
        return acc;
    }, {
        "20 and younger": [],
        "21-30": [],
        "31-40": [],
        "41-50": [],
        "51 and older": []
    });
};