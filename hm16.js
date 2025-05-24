let words=['banana','fig','apple','kiwi','watermelon']
let words4=[]
for(let i=0;i<words.length;i++){
    if(words[i].length>4){
        words4.push(words[i].toUpperCase())
    }
}
words4.sort()
console.log(words4)