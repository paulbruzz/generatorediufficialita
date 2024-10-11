var personeSingolare = [];
var personePlurale = [];
var alleSquadre = [];
var perSquadre = [];
var conSquadre = [];
var cities = [];
var intro = [];
var transferSingolare = ["ha ufficializzato il suo trasferimento", "ha confermato che andrà", "si trasferisce", "si accasa"];
var transferPlurale = ["hanno ufficializzato il loro trasferimento", "hanno confermato che andranno", "si trasferiscono", "si accasano"];

var termini = ["in prestito secco", "in prestito con diritto di riscatto", "in prestito biennale",
    "in prestito con obbligo di riscatto", "a titolo definitivo"];

var tatticaSingolare = ["Alzerà il tasso tecnico", "Giocherà", "Coprirà il buco", "Dimostrerà le sue doti",
    "Promette di regalare magie", "Grande attesa per i suoi numeri", "Colmerà le carenze",
    "Porterà equilibrio", "Si farà valere con la sua tecnica",
    "Renderà la squadra più solida", "Aumenterà la qualità complessiva", "Fornirà soluzioni",
    "Cambierà le sorti del reparto", "Aggiungerà esperienza"];

var tatticaPlurale = ["Alzeranno il tasso tecnico", "Giocheranno", "Copriranno il buco", "Dimostreranno le loro doti",
    "Promettono di regalare magie", "Grande attesa per i loro numeri", "Colmeranno le carenze",
    "Porteranno equilibrio", "Si faranno valere con la loro tecnica",
    "Renderanno la squadra più solida", "Aumenteranno la qualità complessiva", "Forniranno soluzioni",
    "Cambieranno le sorti del reparto", "Aggiungeranno esperienza"];

var zonaDiCampo = ["in porta", "sulla fascia sinistra", "in difesa", "sulla trequarti", "in mediana",
    "in attacco", "sulla fascia destra", "a centrocampo"];

// Define the raw URLs for your text files
var urls = {
    personeSingolare: 'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/nomiPersoneSingolari.txt',
    personePlurale: 'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/nomiPersonePlurali.txt',
    alleSquadre: 'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/alleSquadre.txt',
    perSquadre: 'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/perSquadre.txt',
    conSquadre: 'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/conSquadre.txt',
    cities: 'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/cities.txt',
    intro: 'https://raw.githubusercontent.com/paulbruzz/generatorediufficialita/main/intro.txt'
};

// Function to load the text files
function loadFiles() {
    // Create an array of promises for each fetch call
    const fetchPromises = Object.keys(urls).map(key => {
        return fetch(urls[key])
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.arrayBuffer(); // Get the response as an ArrayBuffer
            })
            .then(buffer => {
                // Use TextDecoder to decode the ArrayBuffer as UTF-8
                const decoder = new TextDecoder('utf-8');
                const text = decoder.decode(buffer);

                // Split the text by new lines, trim whitespace, and filter out empty lines
                return text.split('\n').map(item => item.trim()).filter(item => item !== ""); // Filters out empty lines
            });
    });

    // Use Promise.all to wait for all fetch calls to complete
    Promise.all(fetchPromises)
        .then(results => {
            // Assign the results to the respective arrays
            personeSingolare = results[0];  // Populates from the 'nomiPersoneSingolari.txt' file
            personePlurale = results[1];     // Populates from the 'nomiPersonePlurali.txt' file
            alleSquadre = results[2];        // Populates from the 'alleSquadre.txt' file
            perSquadre = results[3];         // Populates from the 'perSquadre.txt' file
            conSquadre = results[4];         // Populates from the 'conSquadre.txt' file
            cities = results[5];             // Populates from the 'cities.txt' file
            intro = results[6];              // Populates from the 'intro.txt' file

            // Log the populated arrays
            console.log("Data loaded successfully");
            console.log("personeSingolare:", personeSingolare);
            console.log("personePlurale:", personePlurale);
            console.log("alleSquadre:", alleSquadre);
            console.log("perSquadre:", perSquadre);
            console.log("conSquadre:", conSquadre);
            console.log("cities:", cities);
            console.log("intro:", intro);
            getUfficialita();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function to load the files when the window loads
window.onload = function () {
    loadFiles();
};


  function getUfficialita(){
    var randomSquadra = alleSquadre[Math.floor(Math.random() * alleSquadre.length)];
    var introRandom = intro[Math.floor(Math.random() * intro.length)];
    var terminiRandom = termini[Math.floor(Math.random() * termini.length)];
    var indiceSquadra = alleSquadre.indexOf(randomSquadra);
    var randomPerSquadra = perSquadre[indiceSquadra];
    var randomConSquadra = conSquadre[indiceSquadra];
    var randomZonaDiCampo = zonaDiCampo[Math.floor(Math.random() * zonaDiCampo.length)];
    var randomPlurale = Math.floor(Math.random()*2);  /*se 0 è singolare, se 1 è plurale*/
    var randomPerOCon = Math.floor(Math.random()*2);  /*0 per "Per + squadra", 1 per "Con + squadra"*/
    /*Per la data*/
    var formatoDataDiOggi = {'weekday': 'long', 'month': 'long', 'day': '2-digit'};
    var dataDiOggi = new Date().toLocaleString('it-IT', formatoDataDiOggi);

    document.getElementById("dataOggiId").textContent = cities[Math.floor(Math.random() * cities.length)] + " - " + dataDiOggi;


    if(randomPerOCon == 0)
    {
      if(randomPlurale == 0)
      {
        var randomPersona = personeSingolare[Math.floor(Math.random() * personeSingolare.length)];
        var transferRandomSingolare = transferSingolare[Math.floor(Math.random() * transferSingolare.length)];
        var tatticaRandomSingolare = tatticaSingolare[Math.floor(Math.random() * tatticaSingolare.length)];

        document.getElementById("titolo").textContent = "Ufficialə" + " "
        + randomPersona + " " + randomSquadra + " " + "AHAHAHAHAH";

        document.getElementById("articolo").textContent = introRandom + " "
        + randomPersona + " " + transferRandomSingolare + " "
        + randomSquadra + " " + terminiRandom + ". " + tatticaRandomSingolare
        + " " + randomZonaDiCampo + ".";
      }
      else
      {
        var randomPersonaPlurale = personePlurale[Math.floor(Math.random() * personePlurale.length)];
        var transferRandomPlurale = transferPlurale[Math.floor(Math.random() * transferPlurale.length)];
        var tatticaRandomPlurale = tatticaPlurale[Math.floor(Math.random() * tatticaPlurale.length)];

        document.getElementById("titolo").textContent = "Ufficialə" + " "
        + randomPersonaPlurale + " " + randomSquadra + " " + "AHAHAHAHAH";

        document.getElementById("articolo").textContent = introRandom + " "
        + randomPersonaPlurale + " " + transferRandomPlurale + " " + randomSquadra
        + " " + terminiRandom  + ". " + tatticaRandomPlurale + " " + randomZonaDiCampo
        + ".";
      }
    }
    else
    {
      var introSquadraSoggetto = ["Colpo ", "Affarone ", "Rinforzi in arrivo ", "Un altro grande acquisto "];
      if(randomPlurale == 0)
      {
        var introSquadraSoggettoRandom = introSquadraSoggetto[Math.floor(Math.random() * introSquadraSoggetto.length)];
        var randomPersona = personeSingolare[Math.floor(Math.random() * personeSingolare.length)];
        var transferRandomSingolare = transferSingolare[Math.floor(Math.random() * transferSingolare.length)];
        var tatticaRandomSingolare = tatticaSingolare[Math.floor(Math.random() * tatticaSingolare.length)];
        var contratti = ["un biennale", "un triennale", "un quadriennale", "un quinquennale"];
        var randomContratto = contratti[Math.floor(Math.random() * contratti.length)];
        var randomIngaggio = Math.floor(Math.random()*(20-2)+2); /*milioni di euro a stagione*/

        document.getElementById("titolo").textContent = "Ufficialə" + " "
        + randomPersona + " " + randomSquadra + " " + "AHAHAHAHAH";

        document.getElementById("articolo").textContent = introSquadraSoggettoRandom + randomPerSquadra + ": "
        + randomPersona + " ha firmato " + randomContratto + " da " + randomIngaggio
        + " milioni a stagione. " + tatticaRandomSingolare
        + " " + randomZonaDiCampo + ".";
      }
      else
      {
        var introSquadraSoggettoRandom = introSquadraSoggetto[Math.floor(Math.random() * introSquadraSoggetto.length)];
        var randomPersonaPlurale = personePlurale[Math.floor(Math.random() * personePlurale.length)];
        var transferRandomSingolare = transferPlurale[Math.floor(Math.random() * transferSingolare.length)];
        var tatticaRandomSingolare = tatticaPlurale[Math.floor(Math.random() * tatticaSingolare.length)];
        var contratti = ["un biennale", "un triennale", "un quadriennale", "un quinquennale"];
        var randomContratto = contratti[Math.floor(Math.random() * contratti.length)];
        var randomIngaggio = Math.floor(Math.random()*(20-2)+2); /*milioni di euro a stagione*/

        document.getElementById("titolo").textContent = "Ufficialə" + " "
        + randomPersonaPlurale + " " + randomSquadra + " " + "AHAHAHAHAH";

        document.getElementById("articolo").textContent = introSquadraSoggettoRandom + randomPerSquadra + ": "
        + randomPersonaPlurale + " hanno firmato " + randomContratto + " da " + randomIngaggio
        + " milioni a stagione. " + tatticaRandomSingolare
        + " " + randomZonaDiCampo + ".";
      }
    }
  }
