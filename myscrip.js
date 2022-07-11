// console.log("hello")

// var btn = document.getElementById('calculate');
// btn.addEventListener('click', calc);

// function calc()
// {
//     console.log(document.getElementById("p"),value);
// }

function myFunction() {
    let p = document.getElementById("principle").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;
    
    let byaz = p*r*t/100;
    let totalamount = Number(byaz) + Number(p);
    
    document.getElementById("Byaz").innerHTML = "Byaz : (₹) " + byaz;
    document.getElementById("total").innerHTML = "Total : (₹) " + totalamount;

  
}