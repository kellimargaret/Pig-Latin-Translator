describe('pigLatin', function() {
    it("adds 'ay' to the end of words that start with a vowel", function() {
        expect(pigLatin("eggs")).to.equal("eggsay");
    });
});

describe ('pigLatin', function() {
    it("moves starting consonants to end of word before adding 'ay'",
    function () {
        expect(pigLatin("state")).to.equal("atestay");
    });
});
