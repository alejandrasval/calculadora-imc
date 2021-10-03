button.addEventListener("click",calculoIMC)

function calculoIMC(weight, height) {
    weight = document.getElementById("weight").value; 
    height = document.getElementById("height").value; 
    result = document.getElementById("result");
    IMC = (weight/(height*height)).toFixed(1);

    if(IMC < 18.5) {
        result.innerHTML = (`Usted tiene un peso inferior a lo normal, IMC: ${IMC}`); 
    } else if(IMC >= 18.5 && IMC <= 24.9) {
        result.innerHTML = (`Usted tiene un peso normal, IMC: ${IMC}`); 
    } else if(IMC >= 25 && IMC <= 29.9) {
        result.innerHTML = (`Usted tiene un peso superior al normal, IMC: ${IMC}`);
    } else if(IMC >= 30 && IMC <= 39.9) {
        result.innerHTML = (`Usted tiene obesidad, IMC: ${IMC}`);
    } else if(IMC > 40) {
        result.innerHTML = (`Usted tiene obesidad de alto riesgo, IMC: ${IMC}`);
    } 
} 
