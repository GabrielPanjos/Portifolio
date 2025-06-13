let sobrePereira = false
let linguagensEFerramentas = false

function mostrarInfo(infoId) {
    if (infoId === 'sobrePereira' && sobrePereira === false) {

        document.getElementById('apresentacao').style.display = "block";
        document.getElementById('infolinguagensEFerramentas').style.display = "none";

        sobrePereira = true;
        linguagensEFerramentas = false;
    }
    else if (infoId === 'linguagensEFerramentas' && linguagensEFerramentas === false) {

        document.getElementById('infolinguagensEFerramentas').style.display = "block";
        document.getElementById('apresentacao').style.display = "none";
        linguagensEFerramentas = true;
        sobrePereira = false;

    }
    else if (infoId === 'sobrePereira' && sobrePereira === true) {
        document.getElementById('apresentacao').style.display = "none";
        sobrePereira = false;
        linguagensEFerramentas = false;
    }
    else if (infoId === 'linguagensEFerramentas' && linguagensEFerramentas === true) {
        document.getElementById('infolinguagensEFerramentas').style.display = "none";
        sobrePereira = false;
        linguagensEFerramentas = false;
    }
}

document.getElementById("sobrePereira").addEventListener("click", () => {
    mostrarInfo("sobrePereira")
})

document.getElementById("linguagensEFerramentas").addEventListener("click", () => {
    mostrarInfo("linguagensEFerramentas")
})