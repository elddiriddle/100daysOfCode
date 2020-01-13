
function bad(){
    bill = document.getElementById("bill").value
    tip = bill * .05
    total = bill * 1.05;
    document.getElementById("calTip").innerHTML = `Tip Amount: $${tip} `
    document.getElementById("total").innerHTML = `Total Amount: $${total} `
}
  
function ok(){
    bill = document.getElementById("bill").value
    tip = bill * .15
    total = bill * 1.15;
    document.getElementById("calTip").innerHTML = `Tip Amount: $${tip} `
    document.getElementById("total").innerHTML = `Total Amount: $${total} `
}

function standard(){
    bill = document.getElementById("bill").value
    tip = bill * .18;
    total = bill * 1.18;
    document.getElementById("calTip").innerHTML = `Tip Amount: $${tip} `
    document.getElementById("total").innerHTML = `Total Amount: $${total} `
}

function good(){
    bill = document.getElementById("bill").value
    tip = bill * .20
    total = bill * 1.20;
    document.getElementById("calTip").innerHTML = `Tip Amount: $${tip} `
    document.getElementById("total").innerHTML = `Total Amount: $${total} `
}

function excellent(){
    bill = document.getElementById("bill").value
    tip = bill * .30
    total = bill * 1.30;
    document.getElementById("calTip").innerHTML = `Tip Amount: $${tip} `
    document.getElementById("total").innerHTML = `Total Amount: $${total} `
}

