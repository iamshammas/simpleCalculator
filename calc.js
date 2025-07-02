var screen = document.getElementById('screen')

function btnClick(value) {
    screen.value += value;
}

function clrScr() {
    screen.value = "";
}

function showResult(value) {
    const result = eval(screen.value)
    screen.value = result;
}