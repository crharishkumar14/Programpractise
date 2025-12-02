const str = "code code js fun code js";
const freq = str.split(" " ).reduce((acc, word) =>{
  acc[word] = (acc[word]||0)+1;
  return acc;
},{})
console.log(freq);

const str2 =  "tea coffee money tea bill money coffee";
const arrival = str2.split(" "). reduce((acc, wordi)=>{
    acc[wordi] = (acc[wordi]||0) + 1;
    return acc;
}, {})
console.log(arrival);


const strings =  "welcome to welcome to capgemini";
const frequecnyMatch  = strings.split(" ").reduce((acc, wordsink)=>{
acc[wordsink] = (acc[wordsink]||0)+ 1;
return acc;
}, {})
console.log(frequecnyMatch);


