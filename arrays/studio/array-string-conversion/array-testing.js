let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

let strings = [protoArray1, protoArray2, protoArray3, protoArray4]; 

//2) 
function reverseCommas(strings) {
	//TODO: 1. create and instantiate your variables.
	let check = ",";
	let output = strings;
	//TODO: 2. write the code required for this step
	if (strings.includes(check)) {
		output = strings.split(check).reverse().join(check);
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}}

//3)
function semiDash(strings) {
	let check = ";";
	let output = strings;
//TODO: write the code required for this step
if (strings.includes(check)) {
	output = strings.split(check).sort().join('-');

return output;
}}

//4)
function reverseSpaces(strings) {
	let check = "";
	let output = strings;
  //TODO: write the code required for this step
if (strings.includes(check)) {
	output = strings.split(check).sort().reverse().join(check);
	return output;
}}

//5)
function commaSpace(strings) {
	let check = ",";
	let output = strings;
	//TODO: write the code required for this step
  if (strings.includes(check)) {
	output = strings.split(check).sort().join('-');
	return output;
}}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
