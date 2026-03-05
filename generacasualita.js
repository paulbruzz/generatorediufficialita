var personeSingolare = [];
var personePlurale = [];
var alleSquadre = [];
var perSquadre = [];
var conSquadre = [];
var cities = [];
var intro = [];
var transferSingolare = ["ha ufficializzato il suo trasferimento", "ha confermato che andrà", "si trasferisce", "si accasa"];
var transferPlurale = ["hanno ufficializzato il loro trasferimento", "hanno confermato che andranno", "si trasferiscono", "si accasano"];

// Tracking arrays to avoid repetitive content
var recentlyUsed = {
    personeSingolare: [],
    personePlurale: [],
    alleSquadre: [],
    cities: [],
    intro: [],
    transferSingolare: [],
    transferPlurale: [],
    tatticaSingolare: [],
    tatticaPlurale: [],
    zonaDiCampo: [],
    termini: [],
    introSquadraSoggetto: [],
    contratti: []
};

// Configuration for avoiding repetition
var maxRecentlyUsed = 3; // Number of recent items to avoid
var generationCount = 0; // Track how many times content has been generated

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

// Function to load the text files with improved performance
function loadFiles() {
    // Show loading indicator
    var loadingMsg = document.createElement('div');
    loadingMsg.id = 'loadingIndicator';
    loadingMsg.textContent = 'Caricamento contenuti...';
    loadingMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #f0f0f0; padding: 10px; border-radius: 5px; z-index: 1000;';
    document.body.appendChild(loadingMsg);

    // Create fetch requests with optimized settings
    const fetchPromises = Object.keys(urls).map(key => {
        return fetch(urls[key], {
            method: 'GET',
            cache: 'force-cache', // Use browser cache when available
            mode: 'cors'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${key}: ${response.status} ${response.statusText}`);
                }
                return response.text(); // Use text() instead of arrayBuffer() for better performance
            })
            .then(text => {
                // Split and clean data in one pass
                return text.split('\n')
                    .map(item => item.trim())
                    .filter(item => item !== "" && item.length > 0); // More efficient filtering
            })
            .catch(error => {
                console.error(`Error loading ${key}:`, error);
                // Return empty array as fallback
                return [];
            });
    });

    // Use Promise.allSettled for better error resilience
    Promise.allSettled(fetchPromises)
        .then(results => {
            // Remove loading indicator
            var loadingIndicator = document.getElementById('loadingIndicator');
            if (loadingIndicator) {
                loadingIndicator.remove();
            }

            // Process results with error checking
            const successfulResults = results.map((result, index) => {
                if (result.status === 'fulfilled') {
                    return result.value;
                } else {
                    console.warn(`Failed to load file ${Object.keys(urls)[index]}:`, result.reason);
                    return []; // Return empty array for failed loads
                }
            });

            // Assign results to arrays
            personeSingolare = successfulResults[0] || [];
            personePlurale = successfulResults[1] || [];
            alleSquadre = successfulResults[2] || [];
            perSquadre = successfulResults[3] || [];
            conSquadre = successfulResults[4] || [];
            cities = successfulResults[5] || [];
            intro = successfulResults[6] || [];

            // Verify we have data before proceeding
            if (alleSquadre.length > 0 && personeSingolare.length > 0) {
                // Enable the generate button
                var generateBtn = document.getElementById('generateBtn');
                if (generateBtn) {
                    generateBtn.disabled = false;
                    generateBtn.textContent = 'UN\'ALTRA';
                }
                getUfficialita();
            } else {
                console.error('Critical data missing. Cannot generate content.');
                document.getElementById("titolo").textContent = "Errore nel caricamento dei dati";
            }
        })
        .catch(error => {
            // Remove loading indicator on error
            var loadingIndicator = document.getElementById('loadingIndicator');
            if (loadingIndicator) {
                loadingIndicator.remove();
            }
            console.error('Fatal error loading files:', error);
            document.getElementById("titolo").textContent = "Errore di connessione";
        });
}

// Call the function to load the files when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadFiles();
});

// Fallback for older browsers
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFiles);
} else {
    loadFiles();
}

// Utility function to get a smart random element avoiding recent repetitions
function getSmartRandom(array, categoryKey) {
    if (!array || array.length === 0) return null;
    
    var recentItems = recentlyUsed[categoryKey] || [];
    var availableItems = array.filter(item => !recentItems.includes(item));
    
    // If all items have been used recently, reset the recently used list
    if (availableItems.length === 0) {
        recentlyUsed[categoryKey] = [];
        availableItems = [...array];
    }
    
    // If we have very few options left, increase variety by using all items
    if (availableItems.length < Math.max(1, array.length * 0.3)) {
        availableItems = [...array];
        recentlyUsed[categoryKey] = [];
    }
    
    var selectedItem = availableItems[Math.floor(Math.random() * availableItems.length)];
    
    // Track the selected item
    if (!recentlyUsed[categoryKey]) {
        recentlyUsed[categoryKey] = [];
    }
    recentlyUsed[categoryKey].push(selectedItem);
    
    // Keep only the most recent items
    if (recentlyUsed[categoryKey].length > maxRecentlyUsed) {
        recentlyUsed[categoryKey].shift();
    }
    
    return selectedItem;
}

// Enhanced random selection with weighted distribution for better variety
function getWeightedRandom(array, categoryKey) {
    if (!array || array.length === 0) return null;
    
    var recentItems = recentlyUsed[categoryKey] || [];
    var weights = array.map(item => {
        var recentIndex = recentItems.indexOf(item);
        if (recentIndex === -1) {
            return 1.0; // Normal weight for unused items
        }
        // Reduce weight based on how recently it was used
        return Math.max(0.1, 1.0 - (0.3 * (maxRecentlyUsed - recentIndex) / maxRecentlyUsed));
    });
    
    // Calculate total weight
    var totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    var random = Math.random() * totalWeight;
    
    var weightSum = 0;
    for (var i = 0; i < array.length; i++) {
        weightSum += weights[i];
        if (random <= weightSum) {
            var selectedItem = array[i];
            
            // Log selection for debugging (can be removed in production)
            if (recentItems.includes(selectedItem)) {
                console.log("Selected recently used item:", selectedItem, "for category:", categoryKey);
            }
            
            // Track the selected item
            if (!recentlyUsed[categoryKey]) {
                recentlyUsed[categoryKey] = [];
            }
            recentlyUsed[categoryKey].push(selectedItem);
            
            // Keep only the most recent items
            if (recentlyUsed[categoryKey].length > maxRecentlyUsed) {
                recentlyUsed[categoryKey].shift();
            }
            
            return selectedItem;
        }
    }
    
    // Fallback to last item if something goes wrong
    return array[array.length - 1];
}

// Function to reset recently used items (useful for testing or after many generations)
function resetRecentlyUsed() {
    for (var key in recentlyUsed) {
        recentlyUsed[key] = [];
    }
    generationCount = 0;
    console.log("Recently used items have been reset for fresh content generation.");
}

// Function to adjust repetition avoidance settings
function setRepetitionSettings(maxRecent) {
    maxRecentlyUsed = Math.max(1, Math.min(maxRecent, 10)); // Keep between 1-10
    console.log("Max recently used items set to:", maxRecentlyUsed);
}

// Function to update debug information
function updateDebugInfo() {
    var genCountElement = document.getElementById("genCount");
    var avoidedCountElement = document.getElementById("avoidedCount");
    
    if (genCountElement) {
        genCountElement.textContent = generationCount;
    }
    
    if (avoidedCountElement) {
        var totalAvoided = 0;
        for (var key in recentlyUsed) {
            totalAvoided += recentlyUsed[key].length;
        }
        avoidedCountElement.textContent = totalAvoided;
    }
}

// Toggle debug info visibility (for development)
function toggleDebugInfo() {
    var debugElement = document.getElementById("debugInfo");
    if (debugElement) {
        debugElement.style.display = debugElement.style.display === "none" ? "block" : "none";
    }
}


  function getUfficialita(){
    generationCount++; // Increment generation counter
    
    // Use smart random selection to avoid repetition
    var randomSquadra = getWeightedRandom(alleSquadre, 'alleSquadre');
    var introRandom = getWeightedRandom(intro, 'intro');
    var terminiRandom = getWeightedRandom(termini, 'termini');
    var indiceSquadra = alleSquadre.indexOf(randomSquadra);
    var randomPerSquadra = perSquadre[indiceSquadra];
    var randomConSquadra = conSquadre[indiceSquadra];
    var randomZonaDiCampo = getWeightedRandom(zonaDiCampo, 'zonaDiCampo');
    var randomPlurale = Math.floor(Math.random()*2);  /*se 0 è singolare, se 1 è plurale*/
    var randomPerOCon = Math.floor(Math.random()*2);  /*0 per "Per + squadra", 1 per "Con + squadra"*/
    /*Per la data*/
    var formatoDataDiOggi = {'weekday': 'long', 'month': 'long', 'day': '2-digit'};
    var dataDiOggi = new Date().toLocaleString('it-IT', formatoDataDiOggi);

    document.getElementById("dataOggiId").textContent = getWeightedRandom(cities, 'cities') + " - " + dataDiOggi;


    if(randomPerOCon == 0)
    {
      if(randomPlurale == 0)
      {
        var randomPersona = getWeightedRandom(personeSingolare, 'personeSingolare');
        var transferRandomSingolare = getWeightedRandom(transferSingolare, 'transferSingolare');
        var tatticaRandomSingolare = getWeightedRandom(tatticaSingolare, 'tatticaSingolare');

        document.getElementById("titolo").textContent = "Ufficialə" + " "
        + randomPersona + " " + randomSquadra + " " + "AHAHAHAHAH";

        document.getElementById("articolo").textContent = introRandom + " "
        + randomPersona + " " + transferRandomSingolare + " "
        + randomSquadra + " " + terminiRandom + ". " + tatticaRandomSingolare
        + " " + randomZonaDiCampo + ".";
      }
      else
      {
        var randomPersonaPlurale = getWeightedRandom(personePlurale, 'personePlurale');
        var transferRandomPlurale = getWeightedRandom(transferPlurale, 'transferPlurale');
        var tatticaRandomPlurale = getWeightedRandom(tatticaPlurale, 'tatticaPlurale');

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
        var introSquadraSoggettoRandom = getWeightedRandom(introSquadraSoggetto, 'introSquadraSoggetto');
        var randomPersona = getWeightedRandom(personeSingolare, 'personeSingolare');
        var transferRandomSingolare = getWeightedRandom(transferSingolare, 'transferSingolare');
        var tatticaRandomSingolare = getWeightedRandom(tatticaSingolare, 'tatticaSingolare');
        var contratti = ["un biennale", "un triennale", "un quadriennale", "un quinquennale"];
        var randomContratto = getWeightedRandom(contratti, 'contratti');
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
        var introSquadraSoggettoRandom = getWeightedRandom(introSquadraSoggetto, 'introSquadraSoggetto');
        var randomPersonaPlurale = getWeightedRandom(personePlurale, 'personePlurale');
        var transferRandomPlurale = getWeightedRandom(transferPlurale, 'transferPlurale');
        var tatticaRandomPlurale = getWeightedRandom(tatticaPlurale, 'tatticaPlurale');
        var contratti = ["un biennale", "un triennale", "un quadriennale", "un quinquennale"];
        var randomContratto = getWeightedRandom(contratti, 'contratti');
        var randomIngaggio = Math.floor(Math.random()*(20-2)+2); /*milioni di euro a stagione*/

        document.getElementById("titolo").textContent = "Ufficialə" + " "
        + randomPersonaPlurale + " " + randomSquadra + " " + "AHAHAHAHAH";

        document.getElementById("articolo").textContent = introSquadraSoggettoRandom + randomPerSquadra + ": "
        + randomPersonaPlurale + " hanno firmato " + randomContratto + " da " + randomIngaggio
        + " milioni a stagione. " + tatticaRandomPlurale
        + " " + randomZonaDiCampo + ".";
      }
    }
    
    // Update debug information
    updateDebugInfo();
  }
