let keys = document.querySelectorAll('.key');
let screen = document.querySelector('#screen');

keys.forEach((key) => {

    key.addEventListener('click', () => {
        if (key.id === "clear") {
            screen.textContent = "";
        } else if (key.id === "equals") {
            screen.textContent = calculate(screen.textContent)
        } else {
            screen.textContent += key.textContent
        }
    })

})


function calculate(textContent) {
    let calculation = 1
    return calculation;
}