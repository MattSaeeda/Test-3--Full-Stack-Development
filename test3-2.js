/* //1. Write a JavaScript function to convert a number from one base to another. 
//Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8)); 
console.log(base_convert(1000,2,8));
"160544"
"10" */

var base_convert = function(number, initial_base, change_base) {
    if ((initial_base && change_base) <2 || (initial_base && change_base)>36)
     return 'Base between 2 and 36';
    
     return parseInt(number + '', initial_base)
     .toString(change_base);
 }

/* 2. Write a JavaScript function to convert a binary number to a decimal number. 
Test Data :
console.log(bin_to_dec('110011')); 
console.log(bin_to_dec('100'));
51 
4 */

function btod ( i ) {
console.log(i);
}

/* 3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. 
Test Data :
console.log(dec_to_bho(120,'B')); 
console.log(dec_to_bho(120,'H')); 
console.log(dec_to_bho(120,'O'));
"1111000" 
"78" 
"170" */


 function dec_to_bho(number, change_base) {
    if (change_base == B ){
        return  parseInt(number + '', 10)
        .toString(2);} else
        if (change_base == H ){
            return  parseInt(number + '', 10)
            .toString(8);} else 
            if (change_base == O ){
                return  parseInt(number + '', 10)
                .toString(8);} else
                console.log("pick H, B, or O");

    }

 


/* 4. Write a JavaScript function to generate a random integer. 
Test Data :
console.log(rand(20,1)); 
console.log(rand(1,10)); 
console.log(rand(6)); 
console.log(rand()); 
15 
5 
1 
0 */

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

/* 5. Write a JavaScript function to format a number up to specified decimal places. 
Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10" 
"2.100" 
"2100.00" */

function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
       return n.toFixed(d);
       }

/* 6. Write a JavaScript function to find the highest value in an array. 
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56 
0 */

function max1(array1){

return Math.max(...array1);

}

/* 7. Write a JavaScript function to find the lowest value in an array. 
Test Data :
console.log(min([12,34,56,1])); 
console.log(min([-12,-34,0,-56,-1]));
1 
-56 */

function min1(array1){

    return Min.max(...array1);
    
    }


/* 8. Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers. 
Test Data :
console.log(gcd_more_than_two_numbers([3,15,27])); 
console.log(gcd_more_than_two_numbers([5,10,15,25]));
Output :
3 
5 */

function gcd_more_than_two_numbers(input) {
    if (toString.call(input) !== "[object Array]")  
          return  false;  
    var len, a, b;
      len = input.length;
      if ( !len ) {
          return null;
      }
      a = input[ 0 ];
      for ( var i = 1; i < len; i++ ) {
          b = input[ i ];
          a = gcd_two_numbers( a, b );
      }
      return a;
  }
  
  function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

/* 9. Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers. 
Test Data :
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));
Output :
25200 
150 */

function lcm_more_than_two_numbers(input_array) {
    if (toString.call(input_array) !== "[object Array]")  
        return  false;  
 var r1 = 0, r2 = 0;
    var l = input_array.length;
    for(i=0;i<l;i++) {
        r1 = input_array[i] % input_array[i + 1];
        if(r1 === 0) {
            input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
        }
        else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0) {
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
            }
            else {
                input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
            }
        }
    }
    return input_array[l - 1];
}