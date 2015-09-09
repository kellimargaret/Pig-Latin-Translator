var pigLatin = function(word) {
    var split = word.split("");
    while ((split[0] !== "a") &&
        (split[0] !== "e") &&
        (split[0] !== "i") &&
        (split[0] !== "o") &&
        (split[0] !== "u")) {

        split.push(split.shift());
    }

    split.push('a', 'y');

    var result = split.join("");
    return result;
};
