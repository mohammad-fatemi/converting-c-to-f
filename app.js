const $ = document;
const body=$.querySelector("body");
const typeOfConvert = $.querySelector("#convertType");
var numberBox = $.querySelector("#numberBox");
const result = $.querySelector(".resulte");
const convertBtn = $.getElementById("convertBtn");
const resetBtn = $.getElementById("resetBtn");
const changeBtn = $.getElementById("changeBtn");
var i = 1;


// default positon
typeOfConvert.innerHTML = "convert C to F";
document.title = "C to F";
numberBox.placeholder="enter the C";


//when change button clicked
changeBtn.addEventListener("click", () => {

    if (i % 2 == 0) {
        typeOfConvert.innerHTML = "convert C to F";
        document.title = "C to F";
        numberBox.placeholder="enter the C";

        body.style.background="linear-gradient(270deg, rgba(0,195,223,1) 0%, rgba(191,198,255,1) 100%)"

    } else {
        typeOfConvert.innerHTML = "convert F to C";
        document.title = "F to C";
        numberBox.placeholder="enter the F";

        body.style.background="linear-gradient(90deg, rgba(0,195,223,1) 0%, rgba(191,198,255,1) 100%)"
    }

    i++;

    result.innerHTML="result";

    console.log(i);

})


//when reset button clicked
resetBtn.addEventListener("click", () => {
    result.innerHTML = "result";
    numberBox.value = "";
})

//when convert button clecked
convertBtn.addEventListener("click", () => {
    var value = numberBox.value;

    let F = value * (9 / 5) + 32;
    let C = (value - 32) * (5 / 9);





    if (i % 2 == 0) {
        result.innerHTML = "C is : " + C.toFixed(2);

    } else {
        result.innerHTML = "F is : " + F.toFixed(2);
    }

})