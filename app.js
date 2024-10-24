
function adiciona() {
    console.log("Estou adicionando 1!");
    let contador = document.getElementById("contador");
    contador.innerHTML = +contador.innerHTML + 1;
}

function remove() {
    console.log("Estou removendo 1!");
    let contador = document.getElementById("contador");
    if(contador.innerHTML > 0)
    contador.innerHTML = +contador.innerHTML - 1;
}