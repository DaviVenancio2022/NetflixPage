/*
Botao= quando clicado -> chama funcao -> liga o som
Document= HTML
querySelector()= "nome do intem no html"
addEventListener= listar eventos ocorridos
*/
let botaoSom = document.querySelector(".botao-som");
let botaoInfo = document.querySelector(".link-info");
let video = document.querySelector(".video");
let modal = document.querySelector(".modal");
let audio = document.querySelector(".audio");

botaoSom.addEventListener("click", alternarSom);
function alternarSom() {
    if (video.muted) {
        video.muted = false;
        botaoSom.textContent = "🔊";
    } else {
        video.muted = true;
        botaoSom.textContent = "🔇";
    }
}

botaoInfo.addEventListener("click", exibirInfo);
modal.addEventListener("click", esconderInfo);
function exibirInfo() {
    modal.style.display = "block";
}
function esconderInfo() {
    modal.style.display = "none";
}

window.addEventListener("click", tocarAudio);
function tocarAudio() {
    audio.play();
}
