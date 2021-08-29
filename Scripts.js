var slider1 = document.getElementById("slider1");
var output1 = document.getElementById("value1");
var years;
var interest;
output1.innerHTML = slider1.value;
slider1.oninput = function(){
    output1.innerHTML = this.value;
}
slider1.addEventListener("mousemove", function(){
    years = slider1.value;
    let y = (100 * years) / 40;
    let color = "linear-gradient(90deg, rgb(27, 57, 121)" + y + "%, rgb(221, 221, 221)" + y + "%)";
    slider1.style.background = color;
})

var slider2 = document.getElementById("slider2");
var output2 = document.getElementById("value2");
output2.innerHTML = slider2.value;
slider2.oninput = function(){
    output2.innerHTML = this.value;
}
slider2.addEventListener("mousemove", function(){
    interest = slider2.value;
    let y = (100 * interest) / 10;
    let color = "linear-gradient(90deg, rgb(27, 57, 121)" + y + "%, rgb(221, 221, 221)" + y + "%)";
    slider2.style.background = color;
})

function calculate(){
    //principle interest calculation
    let loan = document.getElementById("loanInput").value;
    let calcPi = ((interest/100)/12)*loan/(1-Math.pow((1+((interest/100)/12)), -years*12));
    document.getElementById("prinOutput").innerHTML = calcPi.toFixed(2);
    //tax calculation
    let annualTax = document.getElementById("taxInput").value;
    let calcTax = annualTax / 12;
    document.getElementById("taxOutput").innerHTML = calcTax.toFixed(2);
    //insurance calculation
    let annualInsur = document.getElementById("insuranceInput").value;
    let calcInsur = annualInsur / 12;
    document.getElementById("insuranceOutput").innerHTML = calcInsur.toFixed(2);
    //monthly payment calculation
    document.getElementById("monthlyOutput").innerHTML = (calcPi+calcTax+calcInsur).toFixed(2);
}