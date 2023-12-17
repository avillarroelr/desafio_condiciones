// Scritps Image Border
function modifyBorder() {
    const myLogo = document.getElementById("logoLatam");
    const imgPreset = myLogo.classList.contains("img_borde_main_change");
    if (imgPreset == false) {
        myLogo.classList.add("img_borde_main_change");
    } else {
    myLogo.classList.remove("img_borde_main_change");
    }
}
// Scritps stikers
function numberStickers() {
    var numOne = document.getElementById("num1").value;
    var numTwo = document.getElementById("num2").value;
    var numThree = document.getElementById("num3").value;
    var totalInputs = Number(numOne) + Number(numTwo) + Number(numThree);

    var resultElement = document.getElementById("resultStikers");

    if (totalInputs <= 10) {
        resultElement.innerHTML = "Llevas " + totalInputs + " Stickers";
    } else {
        resultElement.innerHTML = "Llevas demasiados stickers";
    }
}
// Scritps password
function password() {
    var optionOne = document.getElementById("selectOne").value;
    var optionTwo = document.getElementById("selectTwo").value;
    var optionThree = document.getElementById("selectThree").value;
    var totalSelects = optionOne + optionTwo + optionThree;
    var resultPassword = document.getElementById("resultPassword");
    switch (totalSelects) {
        case "911":
            resultPassword.innerHTML = "CONTRASEÑA N°1 CORRECTA";
        break;
        case "741":
            resultPassword.innerHTML = "CONTRASEÑA N°2 CORRECTA";
        break;
        default:
            resultPassword.innerHTML = "CONTRASEÑA INCORRECTA";
        break;
    }
}
