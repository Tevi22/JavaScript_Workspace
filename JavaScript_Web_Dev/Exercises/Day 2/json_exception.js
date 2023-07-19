/* eslint-disable camelcase */
/*

ProblemStatement:
Write a JavaScript function to validate whether a given value type is pure json object or not.

*/

function isPureJSONObject(value) {
    if (typeof value !== 'object' || Array.isArray(value)) {
      // Check if the value is not an object or is an array
      return false;
    }
  
    try {
      // Attempt to convert the value to JSON
      JSON.stringify(value);
      return 'Valid JSON';
    } catch (error) {
      // Catch any circular reference errors during JSON conversion
      return 'Invalid JSON';
    }
}

let value1 = 'value1';
let value2 = 'value2';

let value1_json = {key1: value1};
value1_json.key2 = value1_json;
let value2_json = {'key1':'value1', 'key2': 'value'};
console.log(isPureJSONObject(value1_json));// Output: Invalid JSON
console.log(isPureJSONObject(value2_json)); // Output: Valid JSON