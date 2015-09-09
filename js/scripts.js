var pigLatin = function(message) {
    var result = [];
    var messageArr = message.split(" ");
    console.log(messageArr);
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
    return result.join(" ");
}
