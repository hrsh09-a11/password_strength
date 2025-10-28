/* /* /* // return array of names starts with A
names = ["Arish","Ram","crazyguy","tenz","Arampav","Aksh"]

function Crazy(){
    nameA = names.filter(word => word.startsWith("A"))
    console.log(nameA)
}

Crazy(); 
*/


// Merged arrays
/* names = ["Arish","Ram","crazyguy","tenz","Arampav","Aksh"]
players =["Krish","tenz","Ram","Alfajer"]
array =[""]

function merge(){
    const merge = [...new Set([...names,...players])];
    console.log(merge);
  
}

merge();

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];

const merged = [...new Set([...arr1, ...arr2])];
console.log(merged); // [1, 2, 3, 4, 5]  */
/* --------------------x----------------------x-----------------------------------------x-------------------------- */

/* """ import string
import msvcrt
characters = ["!","@","#","$","%","&","(",")"]

while True:
    password = getpass.getpass("ENTER YOUR PASSWORD:")
    has_digit = any(char.isdigit() for char in password)
    has_upper = any(char.isupper() for char in password)
    has_lower = any(char.islower() for char in password)
    has_characters = any(char in characters for char in password)

    strength_score = has_digit + has_characters + has_lower + has_upper


    
    if len(password) < 6:
        print("Please enter a password of atleast 6 characters!")
        continue
    else:
        if strength_score == 4:
            print("Your password is Strong💪")
            break #Exit the loop
        elif strength_score <= 2:
            print("Your password is moderate ✌️")
        else:
            print("Your password is weak 🌿") """ */


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

