/** @format */
function formatString(input, toUpper) {
    if (input === "string" && toUpper === true) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}
var result = formatString("helal", true);
console.log(result);
