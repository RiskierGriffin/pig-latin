//initialize variables
var http = require("http");
var fs = require("fs");
vowels = ["a","e","i","o","u","y"];
pigEnding = "ay";
removedLetters = "";
newWord = "";
newSentence = "";
storeConsonants = [];
newSentenceArray = [];

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
    newSentence = newSentenceArray.join("");
} 
//reads file
fs.readFile("eng.txt", "utf8", function (err, data){
    if(err) throw err;
    else{
        inputText = data.toString().split("\n");
        for(ii = 0; ii < inputText.length; ii++){
            splitWord = inputText[ii].split("");
            letterCheck();
        }
        makeNewSentence();

    }
}); 
fs.writeFile("pig.txt", "newSentence", function(err) {
    if(err){
        console.log("failed");
    }
    else{
        console.log(newSentence);
        console.log("Exported new sentence to pig.txt");
    }
});
