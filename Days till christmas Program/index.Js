var today = new Date();
var cmas = new Date(today.getFullYear(),11,25);
if (today.getMonth()==11 && today.getDate()>=25)
{
    cmas.setFullYear(today.getFullYear()+1);
}
var one_day = 1000*60*60*24;
document.write(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} Days left for christmas`);