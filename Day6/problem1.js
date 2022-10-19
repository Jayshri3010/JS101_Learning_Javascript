//Problem 1 : Given a string count the number of words in that string
let str = "Counting number of words in string";
let count = 0 ;
for (let i=0; i<=str.length-1;i++){
  if (str[i]==" "){
  count++;
}
}

  console.log("Number of words are", count+1);
