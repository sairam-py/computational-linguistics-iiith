var sentanceEnglish = [
    ['John', 'ate', 'an', 'apple', 'before', 'afternoon'],
    ['some', 'students', 'like', 'to', 'study', 'at', 'night'],
    ['John', 'and', 'Mary', 'went', 'to', 'church'],
    ['John', 'went', 'to', 'church', 'after', 'eating'],
    ['did', 'he', 'go', 'to', 'market'],
    ['the', 'woman', 'who', 'called', 'my', 'sister', 'sells', 'cosmetics'],
    ['John', 'goes', 'to', 'the', 'library', 'and', 'studies'],
    ['John', 'ate', 'an', 'apple', 'so', 'did', 'she'],
    ['the', 'teacher', 'returned', 'the', 'book', 'after', 'she', 'noticed', 'the', 'error'],
    ['I', 'told', 'her', 'that', 'I', 'bought', 'a', 'book', 'yesterday']
];
var sentanceHindi = [
    ['राम', 'और', 'श्याम', 'बाजार', 'गयें'],
    ['राम', 'सोया', 'और', 'श्याम', 'भी'],
    ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],
    ['राम', 'खाकर', 'सोया'],
    ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'],
    ['एक', 'लाल', 'किताब', 'वहाँ', 'है'],
    ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है']
];
function selectOptions() {
    var selection = document.getElementById("select").value;
    var text = "";
    if(selection == 'english' ){
        text = "Form a sentence (Declarative or Interrogative or any other type) from the given words<br>(select the buttons in proper order)";
        randomEnglish();
    }
    else if (selection == 'hindi' ){
        text = "Form a sentence (Declarative or Interrogative or any other type) from the given words<br>(select the buttons in proper order)";
        randomHindi();
    }
    else {
        alert("Select language");
    }
    document.getElementById("message").innerHTML = text;
}
function randomEnglish() {
    var sentance = sentanceEnglish[Math.floor(Math.random() * sentanceEnglish.length)];
    var randomize = randomizeWords(sentance);
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='sentanceButtons'>" + randomize[i] + "</button>";
    }
}
function randomHindi() {
    var sentance = sentanceHindi[Math.floor(Math.random() * sentanceHindi.length)];
    var randomize = randomizeWords(sentance);
    for (var i = 0; i < randomize.length; i++) {
        document.getElementById("randomButtons").innerHTML += "<button class='sentanceButtons'>" + randomize[i] + "</button>";
    }
}
function randomizeWords(innerArray) {
    var length = innerArray.length;
    var temp, index;
    while (length > 0) {
        index = Math.floor(Math.random() * length);
        length--;
        temp = innerArray[length];
        innerArray[length] = innerArray[index];
        innerArray[index] = temp;
    }
    return innerArray;
}