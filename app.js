let frm = document.querySelector('#loan-form');
var count = 0;
frm.addEventListener('submit', function(e){
    count++
    console.log(count);
    if(count > 3){
        document.querySelector('.container').style.display = 'none';
        document.querySelector('#try-again').style.display = 'block';
    }
    let loanAmount = document.querySelector('#amount');
    let interest = document.querySelector('#interest');
    let year = document.querySelector('#years');
    let principle = parseFloat(loanAmount.value);
    let calculatedInterest = ( parseFloat(interest.value) / 100 ) /12;
    let calculatedPayment = parseFloat(year.value) * 12;
    let x = Math.pow(1 + calculatedInterest, calculatedPayment);
    let monthlyPayableAmount = (principle*x*calculatedInterest)/(x-1);
    let monthlyPayment = document.getElementById('monthly-payment');
    let totalPayment = document.getElementById('total-payment');
    let totalInterest = document.getElementById('total-interest');
    let monthlyInterest = document.getElementById('monthly-interest');

    if(isFinite(monthlyPayableAmount)){
    monthlyPayment.value = monthlyPayableAmount.toFixed(2);
    totalPayment.value = (monthlyPayableAmount * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthlyPayableAmount * calculatedPayment) - principle).toFixed(2);
    monthlyInterest.value = (((monthlyPayableAmount * calculatedPayment) - principle) / calculatedPayment).toFixed(2);
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    setTimeout(function(){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    }, 3000);
    } else {
        document.getElementById('loading').style.display = 'block';
        setTimeout( function(){
            if(count < 4){
                showErrot('Check Your Numbers');   
            }
        }, 3000);
       
    }
    e.preventDefault();
})

function showErrot(msg){
    document.getElementById('loading').style.display = 'none';
    let div = document.createElement('div');
    div.style.background = "red";
    let heading = document.createElement('h3');
    heading.appendChild(document.createTextNode(msg));
    div.appendChild(heading);
    heading.style.color = 'white';
    let mainHeading = document.querySelector('.heading');
    let card = document.querySelector('.card');
    card.insertBefore(div, mainHeading);
    
    setTimeout(function(){
        div.remove();
    }, 3000);
    
}