console.log('test');

// Dit zijn de afbeeldingen die in een boogje boven de kom staan
var ingrediënten;
ingrediënten = ['/meel.png', '/suiker.png', '/melk.png', '/eieren.png', '/boter.png', '/aardbei.png', '/bessen.png', '/glazuur.png' ];


/*om de geklikte afbeeldingen te laten verdwijnen heb ik hulp gekregen van lotte*/
// Dit zorgt ervoor dat wanneer er op een afbeelding geklikt wordt de kom gevuld wordt (zelfde geldt voor klik1 t/m klik7)
function klik(isNodig) {
  document.querySelector('img').src = 'img/kom.2.png'; // kom wordt vervangen door gevulde kom
  document.getElementById(isNodig).src = ''; // afbeelding waar op geklikt is verdwijnd
}


document.getElementById('ei').addEventListener("click", function(){klik('ei')})
document.getElementById('meel').addEventListener("click", function(){klik('meel')})
document.getElementById('suiker').addEventListener("click", function(){klik('suiker')})
document.getElementById('boter').addEventListener("click", function(){klik('boter')})
document.getElementById('aardbei').addEventListener("click", function(){klik('aardbei')})
document.getElementById('bessen').addEventListener("click", function(){klik('bessen')})
document.getElementById('glazuur').addEventListener("click", function(){klik('glazuur')})
document.getElementById('melk').addEventListener("click", function(){klik('melk')})


// document.getElementById('ei').addEventListener("click", klik);

// function klik1() {
//   document.querySelector('img').src = 'img/kom.2.png';
//   document.getElementById('meel').src = '';
// }
//
// document.getElementById('meel').addEventListener("click", klik1);
//
// function klik2() {
//   document.querySelector('img').src = 'img/kom.2.png';
//   document.getElementById('aardbei').src = '';
// }
//
// document.getElementById('aardbei').addEventListener("click", klik2);
//
// function klik3() {
//   document.querySelector('img').src = 'img/kom.2.png';
//   document.getElementById('melk').src = '';
// }
//
// document.getElementById('melk').addEventListener("click", klik3);
//
// function klik4() {
//   document.querySelector('img').src = 'img/kom.2.png';
//   document.getElementById('suiker').src = '';
// }
//
// document.getElementById('suiker').addEventListener("click", klik4);
//
// function klik5() {
//   document.querySelector('img').src = 'img/kom.2.png';
//   document.getElementById('boter').src = '';
// }
//
// document.getElementById('boter').addEventListener("click", klik5);
//
// function klik6() {
//   document.querySelector('img').src = 'img/kom.2.png';
//   document.getElementById('glazuur').src = '';
// }
//
// document.getElementById('glazuur').addEventListener("click", klik6);
//
// function klik7() {
//   document.querySelector('img').src = 'img/kom.2.png';
//   document.getElementById('bessen').src = '';
// }
//
// document.getElementById('bessen').addEventListener("click", klik7);

// Door te klikken op 'klaar' wordt de taart "gebakken" hier komt een gelukte of mislukte taart uit.
// De nog niet aan geklikte afbeeldingen verdijnen ook wanneer er op 'klaar' wordt geklikt.
function taartBakken(soortTaart) {
  document.getElementById('bessen').src = '';
  document.getElementById('meel').src = '';
  document.getElementById('glazuur').src = '';
  document.getElementById('aardbei').src = '';
  document.getElementById('suiker').src = '';
  document.getElementById('boter').src = '';
  document.getElementById('melk').src = '';
  document.getElementById('ei').src = '';
  document.querySelector('img').src = 'img/'+taart;


var soortTaart = Math.floor(Math.random()*2);
var verschillendeTaarten = ['/taart.png', '/misluktetaart.png'];
var taart = verschillendeTaarten[soortTaart];

// als de taart mislukt is komt er 'helaas de taart is mislukt' te staan
if (soortTaart === 1){
  document.querySelector('h1').textContent = 'Helaas, de taart is mislukt';
  document.querySelector('img').src = 'img/misluktetaart.png';
}
// als de taart is gelukt komt er 'hmm lekker! goed gedaan' te staan en er komt confetti bij
else {
    document.querySelector('h1').textContent = 'Hmm lekker! Goed gedaan!';
    document.querySelector('img').src = 'img/taart.png';
    document.querySelector('body').classList.add('confetti');
}
}

 document.getElementById("button").addEventListener('click', taartBakken);
