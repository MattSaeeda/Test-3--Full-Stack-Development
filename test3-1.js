## LAB TEST 3

/* 1. Write a JavaScript function to check whether an `input` is an array or not. 
Test Data :
console.log(is_array('w3resource')); 
console.log(is_array([1, 2, 4, 0]));
false
true */

function is_array (array1) {

if ( Array.isArray(array1) )
return true;

else returrn false;
}

/* 2. Write a JavaScript function to clone an array. 
Test Data :
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0] 
[1, 2, [4, 0 */]]

function array_clone ( existingArray[]) {

	cloneArray = existingArray;

	return cloneArray;
}

/* 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[]  */

function first (array1 , n ) {

	console.log( array1.splice(0 , n );
}

/* 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]
 */

function last (array1[]){

	return array1.pop();
}


/* 5. Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
 */
var myColor = ["Red", "Green", "White", "Black"];

	console.log( myColor.join() );

	console.log( myColor.join() );

	console.log( myColor.join('+') );


/* 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468
 the output should be 0-254-6-8. */ 

function testNum (x) {

	var digits = (x).toString(10).split("").map(Number);
	
	var newDigit[];
	
	for (i = 0 , i >= digits.lenght , i++ ) {
		

/* 7. Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8 */

function sortA (array1[]) {

	console.log(array1.sort(function(a, b){return a-b}));
}


/* 8. Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )  */

function mostFrequent (array1[]){
;
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (array1[i] == array1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = array1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
}

