
//validate the input

function input_validation( val){
 if (isNaN(val)) {
     alert("please insert amount as number");
 }else if (val < 0) {
     alert('please insert positive number')
 }else{
     return val;
 }
}
// get all the element 
function incomeAmountValue() {
        // get the value 
        const incomeAmount =document.getElementById('income').value;
        const validatedincomeAmount = parseFloat(input_validation(incomeAmount));
        return validatedincomeAmount;
    }


function livingcostfunc() {
        // get the value 
        const foodAmount=document.getElementById('Food').value;
        const validatedfoodAmount = parseFloat(input_validation(foodAmount));
        const rentAmount = document.getElementById('Rent').value
        const validatedrentAmount = parseFloat(input_validation(rentAmount));
        const clotheAmount = document.getElementById('Clothes').value
        const validatedclotheAmount = parseFloat(input_validation(clotheAmount));
            
        //expance
        const livingcost = validatedfoodAmount + validatedrentAmount + validatedclotheAmount;
        return livingcost;
}

// calculate button 
document.getElementById('calcBtn').addEventListener('click', function(){
    const incomeAmount= incomeAmountValue();
    const livingcost = livingcostfunc();
    // calculate the cost 
    const remainingBalance = incomeAmount - livingcost;

    // remaining ballance 
    const totalExpence = incomeAmount - remainingBalance;
    // show the amount 
    if (isNaN(totalExpence) || isNaN(remainingBalance)) {
        //do nothing
    }else{
        document.getElementById('totalexpence').innerText = totalExpence;
        if (remainingBalance < 0) {
            document.getElementById('remainingBalance').innerText = "You can't spent more them you income";
            document.getElementById('remainingBalance').style.color = "red";
        } else {
            document.getElementById('remainingBalance').innerText = remainingBalance;
            document.getElementById('remainingBalance').style.color = "green";
        }
        
    }


});


//  calculate savings 
document.getElementById('saveBtn').addEventListener('click', function () {
    const validatsavingPercent =document.getElementById('savingPercent').value;

    const savingPercent = parseFloat( input_validation(validatsavingPercent));
    const incomeAmount = incomeAmountValue();
    const livingcost = livingcostfunc();
    // savings calculation
    const savings = incomeAmount * (savingPercent/100);

    const totalremaining = incomeAmount - (livingcost +savings);
    // document.getElementById('savingAmount').innerText= savings;

    // document.getElementById('remaining').innerText= totalremaining;
    
    if (isNaN(savings) || isNaN(totalremaining)) {
        //do nothing
        console.log('dfdsfs')
    }else{
        
        if (savings > incomeAmount) {
            document.getElementById('savingAmount').innerText = "You can't save more them you income";
            document.getElementById('savingAmount').style.color = "red";
        } else {
            document.getElementById('savingAmount').innerText= savings;
            document.getElementById('savingAmount').style.color = "green";
        }
        if (totalremaining < 0) {
            document.getElementById('remaining').innerText = "You can't save more them you income";
            document.getElementById('remaining').style.color = "red";
        } else {
            document.getElementById('remaining').innerText = totalremaining;
            document.getElementById('remaining').style.color = "green";
        }
        
    }
});