function letterMiddleValue(a, b) {
    let alpha1 = Alphabet.indexOf(a);
    let alpha2 = Alphabet.indexOf(b);
    let center = (alpha1 + alpha2) / 2;
    let letterLength;

    if (center % 2 == 0.5) {
        letterLength = 2;
    } else {
        letterLength = 1;
    }

    return Alphabet.substring(center, center + letterLength);
}

var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(letterMiddleValue("Q", "U"));
console.log(letterMiddleValue("R", "U"));
console.log(letterMiddleValue("T", "Z"));
console.log(letterMiddleValue("Q", "Z"));