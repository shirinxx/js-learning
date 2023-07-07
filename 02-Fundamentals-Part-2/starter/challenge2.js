const calcTip = function(bill){
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const totals = [125 + calcTip(125), 555 + calcTip(555), 44 + calcTip(44) ];