//function to compute interest 
function compute()
{
    //declare variables to set values
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //add validation for principal input and alert if not positive.
    if(principal.value<=0){
        alert("Enter a positive number.");
        principal.focus();
        return false;
    }
    else{
        //calculate interest
        var interest = principal.value*years*rate/100;
        //convert No. of years into actual year
        var year = new Date().getFullYear()+parseInt(years);
        //Show result 
        document.getElementById("result").innerHTML="\<br\>If you deposit \<mark\>"+principal.value+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>.\<br\>You will receive an amount of \<mark\>"+interest+"\<\/mark\>,\<br\>in the year \<mark\>"+year+"\<\/mark\>.\<br\>";
    }
}
//function to read and display the value of the range slider 
function updateRate(){
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }       
