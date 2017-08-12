var basicCard = require('./basicCard.js')
var clozeCard = require('./clozeCard.js')

var basic_card = new basicCard('Who is the first President?', 
                               'George Washington');
console.log(basic_card.front + '\n' + basic_card.back);

var cloze_card = new clozeCard('George Washington is the first President.', 
                               'George Washinton');                               
console.log(cloze_card.partial + '\n' + cloze_card.cloze+ '\n' + cloze_card.fullText);

