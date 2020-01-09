// Calculate your weight on another planet ----------------------------------
function calculateWeight(earthWeight, planet) {
    let calweight;        
    switch (earthWeight = document.getElementById("weight").value, planet = document.getElementById("pla-net").value) {
     case "Mercury":
       calweight = earthWeight * 0.378;
       break;
     case 'Venus':
       calweight = earthWeight * 0.907;
       break;
     case 'Mars':
       calweight = earthWeight * 0.377;
       break;
     case 'Jupiter':
       calweight = earthWeight * 2.36;
       break;
     case 'Saturn':
        calweight = earthWeight * 0.916;
        break;
     default:
        calweight = 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
    document.getElementById("weight-conver").innerHTML = calweight;
}