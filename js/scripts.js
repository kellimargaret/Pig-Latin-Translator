//JavaScript
var pigLatin = function(message) {

    var result = [];
    var punctuation = "";

    var lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.match(/([!?.])/g)) {

        punctuation = lowerCaseMessage.slice(-1);
        lowerCaseMessage = lowerCaseMessage.slice(0, -1);

    }

    var messageArr = lowerCaseMessage.split(" ");



    messageArr.forEach(function(word) {
        var split = word.split("");
            if (split[0] === "y") {
                split.push(split.shift());
            }
            while (
                (split[0] !== "a") &&
                (split[0] !== "e") &&
                (split[0] !== "i") &&
                (split[0] !== "o") &&
                (split[0] !== "y") &&
                (split[0] !== "u"))
                {
                if ((split[0] === "q") && (split[1] === "u")) {
                    split.push(split.shift());
                }

                split.push(split.shift());
            }

        split.push('a', 'y');
        var wholeWord = split.join("");
        result.push(wholeWord);

    });

    // result.push(punctuation);
    return result.join(" ") + punctuation;

}

//jQuery
$(document).ready(function() {
    $("form#pig").submit(function(event) {
        var message = $("input#message").val();

        var result = pigLatin(message);

        $(".result-message").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
