document.getElementById('result').style.display = 'none';
document.getElementById('loading').style.display = 'none'; 
//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
            // Hde Result
            document.getElementById('result').style.display = 'none'; 

            //Show loader
            document.getElementById('loading').style.display = 'block';   

            setTimeout(calculateResult, 2000);

    e.preventDefault();
});


//Calculate result here
function calculateResult(e){
//Ui Variables
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlePayment =  document.getElementById('monthly-payment');
const totalPayent =  document.getElementById('total-payment');
const totalInterest =  document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculateInterest = parseFloat(interest.value)/ 100/ 12;
const calculatePayment = parseFloat(years.value)*12;

// compute Monthaly Payment
const x = Math.pow(1+calculateInterest, calculatePayment);
const monthaly = (principal*x*calculateInterest)/(x-1);

if(isFinite(monthaly)){
     
monthlePayment.value = monthaly.toFixed(2);
totalPayent.value = (monthaly * calculatePayment).toFixed(2);
totalInterest.value = ((monthaly * calculatePayment) - principal).toFixed(2);
// show result
document.getElementById('result').style.display = 'block'

// Hide loader
document.getElementById('loading').style.display = 'none';

}else{
       showError("Please Check the Number");
}
  
}


//Show error
function showError(error){
    //create a div
    const errorDiv = document.createElement('div');

    // get a ele
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')
    //Add a class
     errorDiv.className = 'alert alert-danger';

     // Create a text node
     errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
     card.insertBefore(errorDiv, heading);

     // clear errro after few  sec
     setTimeout(clearError, 3000);

}

// Clear Error
function clearError(){
    document.querySelector('.alert').remove; 
    document.getElementById("result").style.display = "none";

}

  