const mekan = ["McDonalds'da", "The Bigos'da", "Pizza Il'Forno'da", "evde pişirip", "Dois'te", "Migros'taki dondurulmuş pizzalardan"]
const yan = ["ayran", "Coca-Cola Zero", "Niğde Gazozu", "yeşillik", "Fuse Tea Şeftali", "Fuse Tea Limon", "Fuse Tea Karpuz"]

var body = document.querySelector('body')
var div = document.createElement('div')

var h1yap = document.createElement('h1')
var pyap = document.createElement('p')
var tekrar = document.createElement('button')
var geridon = document.createElement('button')

body.appendChild(div)

function oneriGir(){
    var randommekan = Math.floor(Math.random() * mekan.length)
    var randomyan = Math.floor(Math.random() * yan.length)
    var oneri = `Bence bugün ${mekan[randommekan]} ye. Yanına da ${yan[randomyan]} iyi gider.`
    pyap.innerHTML = oneri

    console.log('içerik yüklendi: ' + Date());
}

function icerigiKur() {

    h1yap.innerHTML = 'Ne yesem ne yesem?'
    
    oneriGir()

    tekrar.setAttribute('onclick', 'oneriGir()')
    tekrar.innerHTML = 'aklına yatmadıysa tekrar dene'
    
    geridon.setAttribute('onclick', 'history.back()')
    geridon.innerHTML = 'megaliste geri dön'

var elements = [h1yap, pyap, tekrar, geridon]
    for (let n = 0; n < elements.length; n++) {div.append(elements[n])}
}

window.addEventListener('DOMContentLoaded', (event) => {
    icerigiKur();
});
