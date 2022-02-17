
function consol(params) {
    console.log("ok" + params)
}



// calculate button 
document.getElementById('calcBtn').addEventListener('click', function(){
    // get the value 
    const incomeAmount =parseFloat(document.getElementById('income').value);
    const foodAmount = parseFloat(document.getElementById('Food').value);
    const rentAmount = parseFloat(document.getElementById('Rent').value);
    const clotheAmount = parseFloat(document.getElementById('Clothes').value);

    //expance
    const livingcost = foodAmount + rentAmount + clotheAmount;
    // calculate the cost 
    const remainingBalance = incomeAmount - livingcost;

    // remaining ballance 
    const totalExpence = incomeAmount - remainingBalance;
    // show the amount 
    document.getElementById('totalexpence').innerText = totalExpence;
    document.getElementById('remainingBalance').innerText = remainingBalance;

})