const info = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Bonjour ${info.name}, je suis une vache de ${info.campus}`,
    e : "oO",
    T : "U "
}));