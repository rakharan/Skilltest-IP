const sentence = "I am A Great human"

const reverse = (string, separator) => {
    return string.split(separator).reverse().join(separator);
}

const newSentence = reverse(sentence, '')
const answer = reverse(newSentence, ' ')
const answer2 = answer.split(' ')
answer2.splice(3, 1, "Taerg")
const finalAnswer = answer2.join(' ')

console.log(finalAnswer)