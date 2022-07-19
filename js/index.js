function karafuroSlider(cambio){
    document.querySelector('.home__imagen').src = cambio;
}

function karafuruBgChange(bg){
    bgChange = document.querySelector('.home');
    bgChange.style.background = bg
}

function karafuruToggle(){
    const karafuruMenu = document.querySelector('.nav__navegador');
    const karafuruLista = document.querySelector('.nav__lista');

    karafuruMenu.classList.toggle('active');
    karafuruLista.classList.toggle('active');

}