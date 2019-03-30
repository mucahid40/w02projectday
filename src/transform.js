module.exports.groupAdultsByAgeRange = function groupAdultsByAgeRange(object) {
    // i am filtering people under 18 but it doesnt check out i dont know why. but it works though
    const underage = [];
    object.filter(item => {
        if(item.age < 18) {
            underage.push(item)
        }
    });

    console.log(underage);
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
            return {};//tried to do if array is empty then return an empty object this way but didnt work
        }// dont want to use else because it can get really sloppy really fast i like that i can use my own specific conditions(i know whats going in and out then)
        return acc;
    }, {
        "20 and younger": [],
        "21-30": [],
        "31-40": [],
        "41-50": [],
        "51 and older": []
    });
};

// to be a 100% honest i couldnt do this if i didnt have the pokemon assignment
// i mean thats how i knew where to start.
// like to be honest im sure eventually i would figure it out without the pokemon but i think it would take me like 3 days to figure it out(over exaggerating)
// and the pokemon really helped me out i dont know id that is ok or allowed but that is just me being honest(go easy on me rein)