/*
Code Modularization:
As you learn more concepts, your code is bound to get more complex. It can get really difficult to manage and maintain code that is several thousands of lines long. 
A better practice is to have multiple files or modules for related functions, that can be imported and used as required.

Now, let's take a look at how to export a module. To export a function to be used in a different file, just add the keyword export in front of the function. 
For example, consider a file called travel.js. Currently, the functions and classes inside this file are not available for other files. 
To make them available for use in other files, we need to add the export keyword in front of items for which we want to give access:
*/

export function totalTravelFare(baseFare, taxPercentage){
	var finalFare;
	finalFare = baseFare*(1+taxPercentage/100);
	return finalFare;
}

//To export a class to be used in a different file, just add the keyword export in front of the class.

export class TravelFare {
	totalTravelFare(baseFare, taxPercentage){
		var finalFare;
		finalFare = baseFare*(1+taxPercentage/100);
		return finalFare;
	}
}

//How to import modules?
//There are multiple styles of writing imports in ES6 JavaScript. The most common practice is 

import { item1,item2,... } from 'filename.js'

//For example:

import { TravelFare } from "./travel.js";

//We can also handle multiple imported modules as shown below:

import { totalTravelFare, TravelFare } from "./travel.js";
console.log(totalTravelFare(1000,10));
tf= new TravelFare();
console.log(tf.totalTravelFare(1000,10));

//Note: The import and export are part of ES6 and not yet supported in the Node version used. To use this in the browser, we need to add type="module" attribute in the script tag.
//For example:

<script type="module" src="travel.js"></script>

/*
Default export:
Apart from exporting , we can also do an default export. The advantage is that while importing, it can be imported with any name. For example:
*/

export default class TravelFare {
	totalTravelFare(baseFare, taxPercentage){
		var finalFare;
		finalFare = baseFare*(1+taxPercentage/100);
		return finalFare;
	}
}

//Import:

import travel from "./travel.js";

/*
Note:

1. There can be only one default export per file
2. While importing one should NOT use { } for default export. Else it will cause an error
*/