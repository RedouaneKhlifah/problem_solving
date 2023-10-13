let num = -51;

num =
  num < 0
    ? -Number(
        String(num * -1)
          .split("")
          .reverse("")
          .join("")
      )
    : Number(String(num).split("").reverse("").join(""));

console.log(num);

// Exemple
/**
 
51 to 15  
500 to 5  
-15 to -51  
-900 to -9 

 * */
