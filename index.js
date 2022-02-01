const numberBtns = document.querySelectorAll("[data-num]");
const operatorBtns = document.querySelectorAll("[data-op]");
const equilBtn = document.querySelector(".calc__equil");
const output = document.querySelector(".calc__output");
let prevNum
let currentNum = ""
let result = ""
let operator



//  figures is clicked. Get the current number selected
function setNum() {

    if (result) {
        currentNum = this.dataset.num;
        result = "";
    } else {
        // trim nubmers for correct display in output
        if (currentNum < 10e+10) {
            currentNum += this.dataset.num;
        }

    }

    output.innerHTML = currentNum;
}


// func which save chosen operator and save previous numder in var
function moveNum() {
    prevNum = currentNum;
    currentNum = "";
    operator = this.dataset.op;

};

// Equals is clicked. Calculate result
function displayNum() {

    prevNum = parseFloat(prevNum);
    if (currentNum === "") {
        currentNum = prevNum
    } else {
        currentNum = parseFloat(currentNum);
    }

    switch (operator) {
        case "+":
            result = prevNum + currentNum;
            break;

        case "-":
            result = prevNum - currentNum;
            break;

        case "*":
            result = prevNum * currentNum;;
            break;

        case "/":
            if (currentNum === 0) { return output.innerHTML = "error" } else {
                result = prevNum / currentNum;
            }

            break;

        // If equal is pressed without an operator, keep number and continue
        default:
            result = currentNum

    }

    output.innerHTML = result;
    prevNum = 0;
    currentNum = result;

};

// Clear button is pressed. Clear everything
function clearAll() {
    prevNum = "";
    currentNum = "";
    output.innerHTML = "0";
};

/* The click events */


numberBtns.forEach((btn) => {
    btn.onclick = setNum
})
operatorBtns.forEach((btn) => {
    btn.onclick = moveNum

})
equilBtn.addEventListener("click", displayNum);

document.querySelector(".clear").onclick = clearAll;


// Adding interaction with keyboard
// in progresss...

// document.addEventListener("keydown", (e) => {
//     console.log(e.key)
//     numberBtns.forEach((btn) => {

//         if (e.key === btn.getAttribute("data-num")) {
//             return setNum()
//         }

//     })
// })






