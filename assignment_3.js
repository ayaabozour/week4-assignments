
let wordCounter ={};
function countWords(str){
 let wordsSplit = str.trim().split(/\s+/);
  for(let i=0; i<wordsSplit.length; i++){
    let word = wordsSplit[i].toLowerCase();
    if(wordCounter[word]){
        wordCounter[word]++;
    }else{
      wordCounter[word]=1;
    }  
} 
console.log(wordCounter);
}

countWords("Hello world Hello world Hey Aya, Hey Monther");