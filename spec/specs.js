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

describe('pigLatin', function() {
    it("treats 'y' as a consonant when it's the first letter", function() {
        expect(pigLatin("yellow")).to.equal("ellowyay");
    });
});

describe('pigLatin', function() {
    it("treats 'y' as a vowel when it is not first letter", function() {
        expect(pigLatin("sync")).to.equal("yncsay");
    });
});

describe('pigLatin', function() {
    it("handles words in sentences individually", function() {
        expect(pigLatin("hello yellow world")).to.equal("ellohay ellowyay orldway");
    });
});
