let string1 = "tgt";
let string2 = "testfr";
let counter = 0;

// get the max lenght
let biglength = Math.max(string1.length ,string2.length )


for ( let i = 0; i < biglength; i++) {
    // if string is the same lenght
    if(string1.length == string2.length ){

        if (string1[i] !== string2[i] ){

                  console.log("replace " + string2[i]  + " with " + string1[i] +  " at index " + i + " and"  );
            }
            
        // if string is not the same lenght
        }else if (string1[i] !== string2[i] ){
            // check if string 1 is small and other caracter is undefined
            if(string1[i] == undefined ){
                 console.log("remove " + string2[i] + " at index " + i )
            }else {
                if(string2[i] !== undefined){
                     console.log("replace " + string2[i] + " with " + string1[i] + " at index " + i  )
                }else  {
                    console.log("insert " + string1[i] + " at index " + i  )
                }
            }
        }
    }


// @Description

// Problem Solving Given two strings, write a method to determine if they are one edit away from each other.

// Example :

// (pale, ple) -->true - insert 'a'

// (pales, pale) --> true -- insert 's'

// (pale, kale) -> true - replace 'p' with 'k'

// (pale, pales) --> true-- remove 's'

// (pale, bake) ->false - replace 'p' with 'b' AND 'I' with 'k'