// let x = 3.88888;
// let y = "12 13 14";


// console.log(x.toFixed(2));
// console.log(typeof parseFloat(y));

// let calculatedInterest = 0.12;

// let x = Math.pow(1 + 0.004167, 12);

// let result = (5000*x*0.004167)/(x-1);

// console.log(result);

let frm = document.querySelector('#loan-form');
frm.addEventListener('submit', function(e){

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
    monthlyPayment.value = monthlyPayableAmount.toFixed(2);
    totalPayment.value = (monthlyPayableAmount * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthlyPayableAmount * calculatedPayment) - principle).toFixed(2);
    monthlyInterest.value = (((monthlyPayableAmount * calculatedPayment) - principle) / calculatedPayment).toFixed(2);

    
    e.preventDefault();
})