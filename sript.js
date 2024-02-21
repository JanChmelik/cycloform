"use strict";
// ------------------------- vypocet ceny
const btnVypocti = document.querySelector('button[name="btn-vypocti"]');
const vypisCeny = document.querySelector('input[name="vypisCeny"]');
const vypis = document.querySelector('p[name="vypis"]');
const vybranaKola = document.querySelectorAll(".inp-kola");
const dobaZapujcky = document.querySelector('select[name="sel-dny"]');
const nosic = document.querySelectorAll(`input[name="rd-nosic"]`);
const rozpocet = document.querySelector('input[name="navrhCeny"]');
let cenaZapujcky;
//------------------------- odeslani reservace
const btnRezerve = document.querySelector(`button[name=reserve]`);
const email = document.querySelector('input[type="email"]');
//
// ##################################################################### vypocet ceny
btnVypocti.addEventListener("click", function () {
  //   if (!parseInt(rozpocet.value) && parseInt(rozpocet.value) !== 0) {
  //     window.alert("nebyl zadan rozpocet");
  //   }
  cenaZapujcky = 0;
  //
  console.log("vypocti clicked");
  for (let i = 0; i < vybranaKola.length; i++) {
    if (vybranaKola[i].checked) {
      cenaZapujcky += vybranaKola[i].value * vybranaKola[i + 1].value;
      console.log(vybranaKola[i + 1].value);
    }
  }
  console.log(`pred dobou ${cenaZapujcky}`);
  cenaZapujcky = cenaZapujcky * dobaZapujcky.value;
  console.log(`po dobe ${cenaZapujcky}`);
  console.log(nosic);
  for (let i = 0; i < nosic.length; i++) {
    if (nosic[i].checked) {
      cenaZapujcky = cenaZapujcky * nosic[i].value;
    }
  }
  console.log(`cena s nosicen ${cenaZapujcky}`);

  vypis.textContent = `Cena vasi reservace ${cenaZapujcky.toString()} coz ${
    cenaZapujcky > rozpocet.value ? "neni" : "je"
  } v souladu s rozpoctem. \n`;
  vypisCeny.value = cenaZapujcky.toString();
  //
  if (cenaZapujcky !== 0 || cenaZapujcky <= rozpocet.value) {
    btnRezerve.dis;
  }
});
// ############################################### oeslani reservace

btnRezerve.addEventListener("click", (e) => {
  console.log(`${email.toString().indexOf("@")}`);
  if (
    email.value.toString().indexOf("@") !== -1 ||
    email.value.toString().indexOf(".") !== -1
  ) {
  } else {
    alert("email is not correct");
    e.preventDefault();
  }
});
