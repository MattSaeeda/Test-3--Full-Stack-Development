//1. Write a JavaScript function to check whether an `input` is a string or not. 
//Test Data :
//console.log(is_string('w3resource')); 
//true
//console.log(is_string([1, 2, 4, 0]));
//false

function is_string( toTest)
{

if(typeof(toTest)=="string"){
    return true;} else

    return false;

}


//2. Write a JavaScript function to check whether a string is blank or not. 
//Test Data :
//console.log(is_Blank('')); 
//console.log(is_Blank('abc'));
//true 
//false

function is_blank(str) {
    return ( 0 === str.length);
}


//3. Write a JavaScript function to split a string and convert it into an array of words. 
//Test Data :
//console.log(string_to_array("Robin Singh"));
//["Robin", "Singh"]

string_to_array = function (str) {
    return str.trim().split(" ");
}


//4. Write a JavaScript function to extract a specified number of characters from a string. 
//Test Data :
//console.log(truncate_string("Robin Singh",4));
//"Robin


function truncate_string( str, n) {
    res = str.substr(0, n);
    return res;
}

///5. Write a JavaScript function to convert a string in abbreviated form. 
//Test Data :
//console.log(abbrev_name("Robin Singh"));
//"Robin S."

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
}


/* 6. Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com" */

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
}

/* 7. Write a JavaScript function to capitalize the first letter of each word in a string. 
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
 */

function capitalize_words(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}