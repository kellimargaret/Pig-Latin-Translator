//JavaScript
var pigLatin = function(message) {

    var result = [];
    var punctuation = "";

    //set message to lower case
    var lowerCaseMessage = message.toLowerCase();

    //look for punctuation in message, slice off end, reset message w/o punctuation
    if (lowerCaseMessage.match(/([!?.])/g)) {

        punctuation = lowerCaseMessage.slice(-1);
        lowerCaseMessage = lowerCaseMessage.slice(0, -1);
    }

    //split message into array of individual words
    var messageArr = lowerCaseMessage.split(" ");

    //loop through messageArr array
    messageArr.forEach(function(word) {

        //split words into component letters
        var split = word.split("");

            //if first letter is 'y', treat as consonant, push to end
            if (split[0] === "y") {
                split.push(split.shift());
            }

            //split consonants off of beginning of word until loop hits a vowel
            while (
                (split[0] !== "a") &&
                (split[0] !== "e") &&
                (split[0] !== "i") &&
                (split[0] !== "o") &&
                (split[0] !== "y") &&
                (split[0] !== "u")) {

                //treat 'qu' as a consonant
                if ((split[0] === "q") && (split[1] === "u")) {
                    split.push(split.shift());
                }
                //push split consonants to end of array of letters
                split.push(split.shift());
            }

        //push 'a', 'y' to end of array of letters
        split.push('a', 'y');

        //join letters into a single word
        var wholeWord = split.join("");

        //push words to result array
        result.push(wholeWord);

    });

    //join array of words to a single string and concat punctuation if it exists
    return result.join(" ") + punctuation;
}

//jQuery
$(document).ready(function() {
    $("form#pig").submit(function(event) {
        //takes input to use as message variable
        var message = $("input#message").val();

        //allows result to be displayed using jQuery
        var result = pigLatin(message);
        $(".result-message").text(result);

        //display '#result' div on form submit
        $("#result").show();
        event.preventDefault();
    });
});
