
const input = document.getElementById("pass")
const btn = document.getElementById("checkpass")
const result = document.getElementById("result")
const fill = document.getElementById("fill");

input.addEventListener("input", passStrength)

characters = ["!","@","#","$","%","&","(",")"]
digits = ['1','2','3','4','5','6','7','8','9','0']


function passStrength(){



    let has_characters = characters.some(char => input.value.includes(char));
    let has_digits = digits.some(digit => input.value.includes(digit));
    let has_upper = /[A-Z]/.test(input.value);
    let has_lower = /[a-z]/.test(input.value);
    


    const strength_score = has_characters + has_digits +has_upper + has_lower



    let pass = input.value;

    if (input.value.length === 0) {
        result.textContent = "";
        fill.style.width = "0";
        fill.style.backgroundColor = "transparent"; // or match your page bg color
    return;
}

    if(strength_score == 4){
        result.textContent = "Your password is strong"
        result.className = "strong"
        fill.style.width = "100%";
        fill.style.backgroundColor = "#00e676";
    }
    else if(strength_score > 2 && strength_score < 4){
        result.textContent = "Your password is moderate"
        result.className = "moderate"
        fill.style.width = "60%";
        fill.style.backgroundColor = "#fcfc02ff";
    }
    else{
        result.textContent = "Your password is weak"
        result.className = "weak"
        fill.style.width = "20%";
        fill.style.backgroundColor = "#fd0404ff";
    }
    
}


