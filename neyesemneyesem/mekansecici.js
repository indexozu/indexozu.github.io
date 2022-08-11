const mekan = ["McDonalds'da", "The Bigos'da", "Pizza Il'Forno'da", "evde pişirip"]
const yan = ["ayran", "Coca-Cola Zero", "Niğde Gazozu", "yeşillik"]

var randommekan = Math.floor(Math.random() * mekan.length)
var randomyan = Math.floor(Math.random() * yan.length)

var body = document.querySelector('body')
var div = document.createElement('div')

var h1yap = document.createElement('h1')
var pyap = document.createElement('p')
var tekrar = document.createElement('button')
var geridon = document.createElement('button')

body.appendChild(div)

h1yap.appendChild(document.createTextNode('Ne yesem ne yesem?'))

pyap.appendChild(document.createTextNode(`Bence bugün ${mekan[randommekan]} ye. Yanına da ${yan[randomyan]} iyi gider.`))

tekrar.setAttribute('onclick', 'yine()')
tekrar.appendChild(document.createTextNode('aklına yatmadıysa tekrar dene'))

geridon.setAttribute('onclick', 'history.back()')
geridon.appendChild(document.createTextNode('megaliste geri dön'))

var elements = [h1yap, pyap, tekrar, geridon]
    for (let i = 0; i <= elements.length; i++) {div.appendChild(elements[i])}

function yine(){
    var randommekan = Math.floor(Math.random() * mekan.length)
    var randomyan = Math.floor(Math.random() * yan.length)
    document.querySelector('p').innerHTML = `Bence bugün ${mekan[randommekan]} ye. Yanına da ${yan[randomyan]} iyi gider.`
}
