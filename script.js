let contador = 0;

function aumentar() {
    contador++;
    document.getElementById("contador").textContent = contador;
}

function diminuir() {
    contador--;
    document.getElementById("contador").textContent = contador;
}

function somar() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    document.getElementById("resultado").textContent = numero1 + numero2;
}

function subtrair() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    document.getElementById("resultado").textContent = numero1 - numero2;
}
