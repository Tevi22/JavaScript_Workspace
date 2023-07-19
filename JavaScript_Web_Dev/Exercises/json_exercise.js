/*
Problem Statement:
Write a JavaScript to code to get the following output in console from the JSON object.

Expected Output: xyz Mobile shipped a Moto G5+ worth 14900 with productId: 1000.

Note: The JSON object contains the following JSON:
*/

let mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'
// convert json to JS object
let phoneObj = JSON.parse(mobJson);
console.log("Xyz mobile shipped a "+ phoneObj.product.name + phoneObj.product.series + " worth " + "$" + phoneObj.price + " with productid: " + phoneObj.productId)
//Output: Xyz mobile shipped a MotoG5+ worth $14900 with productid: 1001