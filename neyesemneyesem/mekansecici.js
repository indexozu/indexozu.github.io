const mekan = ["McDonalds'da", "The Bigos'da", "Pizza Il'Forno'da", "evde pişirip"];

const yan = ["ayran", "Coca-Cola Zero", "Niğde Gazozu", "yeşillik"];

const randommekan = Math.floor(Math.random() * mekan.length);
const randomyan = Math.floor(Math.random() * yan.length);


document.write(`
<h1>Ne yesem ne yesem?</h1>
<p>Bence bugün <b>${mekan[randommekan]}</b> ye. Yanına da <b>${yan[randomyan]}</b> iyi gider.</p>
<button onClick="window.location.reload()">aklına yatmadıysa tekrar dene</button>
<a href="/"><button>megaliste geri dön</button></a>`)