describe('pigLatin', function() {
    it("adds 'ay' to the end of words that start with a vowel", function() {
        expect(pigLatin("under")).to.equal("underay");
    });
});

describe ('pigLatin', function() {
    it("moves starting consonants to end of word before adding 'ay'",
    function () {
        expect(pigLatin("state")).to.equal("atestay");
    });
});

describe('pigLatin', function() {
    it("treats 'qu' as one consonant", function() {
        expect(pigLatin("squeal")).to.equal("ealsquay");
    });
});
