//initialize variables
var http = require("http");
var fs = require("fs");
vowels = ["a","e","i","o","u","y"];
letters = "qwertyuiopasdfghjklzxcvbnm";
pigEnding = "ay";
removedLetters = "";
newWord = "";
newSentence = "";
storeConsonants = [];
newSentenceArray = [];
punctuationArray = [];

//checks each letter of the word and identifies if it is a vowel or a consonant
function letterCheck(){
    storeConsonants = [];
    for(i = 0; i < splitWord.length;i++){
        //if it is a vowel
        if (vowels.indexOf(splitWord[i]) > -1){
            break;
        }
        //if it is a consonant
        else if (vowels.indexOf(splitWord[i]) == -1){
            storeConsonants.push(splitWord[i]);
        }
    }
    removeConsonants();
}
function removeConsonants(){
    for (iii = 0; iii < storeConsonants.length;iii++){
        index = splitWord.indexOf(storeConsonants[iii]);
        splitWord.splice(index,1);
    }
    translate();
}
function translate(){
    joinedLetters = storeConsonants.join("");
    joinedSplitWord = splitWord.join("");
    newWord = joinedSplitWord + joinedLetters + pigEnding + " ";
    newSentenceArray.push(newWord);
}
function makeNewSentence(){
    newSentenceArray.splice(punctuationIndex,0,punctuationSymbol);
    newSentence = newSentenceArray.join("");
} 
//reads file
fs.readFile("eng.txt", "utf8", function (err, data){
    if(err) throw err;
    else{
        inputText = data.toString().split("\n");
        for(ii = 0; ii < inputText.length; ii++){
            if(letters.indexOf(inputText[ii][0]) > -1){
                console.log("all good baws");
                splitWord = inputText[ii].split("");
                letterCheck();
            }
            else{
                punctuationIndex = ii;
                punctuationSymbol = inputText[ii];
                continue;
            }
        }
        makeNewSentence();
        newData = newSentence;

    }
    console.log(newSentence);
}); 
