const img = document.querySelector('.home__imagen');
const height = img.clientHeight;
const width = img.clientWidth;

function BitcoinWhalesSlider(cambio){
    img.src = cambio;
}

img.addEventListener('mousemove', (evt) =>{
    const {layerX, layerY} = evt;

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20

    const xRotation = (
        (layerY - height / 2) / height
    ) * 20

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
        `
        img.style.transform = string;
})

img.addEventListener('mouseout', () => {
    const string = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)
    `
    img.style.transform = string;
})

function BitcoinWhalesBgChange(bg){
    bgChange = document.querySelector('.home');
    bgChange.style.background = bg
}

function BitcoinWhalesToggle(){
    const BitcoinWhalesMenu = document.querySelector('.nav__navegador');
    const BitcoinWhalesLista = document.querySelector('.nav__lista');

    BitcoinWhalesMenu.classList.toggle('active');
    BitcoinWhalesLista.classList.toggle('active');

}