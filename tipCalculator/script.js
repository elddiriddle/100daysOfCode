
function bad(){
    bill = document.getElementById("bill").value
    tip = bill * .05;
    total = bill * 1.05;
    ti = tip.toFixed(2);
    to = total.toFixed(2);
    document.getElementById("calTip").innerHTML = `Tip Amount: $${ti} `
    document.getElementById("total").innerHTML = `Total Amount: $${to} `
}
  
function ok(){
    bill = document.getElementById("bill").value
    tip = bill * .15;
    total = bill * 1.15;
    ti = tip.toFixed(2);
    to = total.toFixed(2);
    document.getElementById("calTip").innerHTML = `Tip Amount: $${ti} `
    document.getElementById("total").innerHTML = `Total Amount: $${to} `
}

function standard(){
    bill = document.getElementById("bill").value
    tip = bill * .18;
    total = bill * 1.18;
    ti = tip.toFixed(2);
    to = total.toFixed(2);
    document.getElementById("calTip").innerHTML = `Tip Amount: $${ti} `
    document.getElementById("total").innerHTML = `Total Amount: $${to} `
}

function good(){
    bill = document.getElementById("bill").value
    tip = bill * .20;
    total = bill * 1.20;
    ti = tip.toFixed(2);
    to = total.toFixed(2);
    document.getElementById("calTip").innerHTML = `Tip Amount: $${ti} `
    document.getElementById("total").innerHTML = `Total Amount: $${to} `
}

function excellent(){
    bill = document.getElementById("bill").value
    tip = bill * .30;
    total = bill * 1.30;
    ti = tip.toFixed(2);
    to = total.toFixed(2);
    document.getElementById("calTip").innerHTML = `Tip Amount: $${ti} `
    document.getElementById("total").innerHTML = `Total Amount: $${to} `
}

