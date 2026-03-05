# 🏆 Generatore di Ufficialità

## 🎯 Cos'è

Il **Generatore di Ufficialità** è un'applicazione web che crea automaticamente comunicati stampa realistici per trasferimenti calcistici, utilizzando:

- **7.000+ nomi di giocatori** (singolari e plurali)
- **100+ squadre italiane** con preposizioni corrette
- **80+ città italiane** 
- **90+ frasi introduttive** giornalistiche
- **Sistema anti-ripetizione intelligente**
- **Ottimizzazioni per prestazioni elevate**

## ✨ Funzionalità

### 🎲 Generazione Intelligente
- **Varietà Grammaticale**: Gestisce automaticamente singular/plurale e preposizioni
- **Stile Giornalistico**: Linguaggio autentico del calcio italiano
- **Anti-Ripetizione**: Evita contenuti ripetitivi con algoritmi di peso
- **Generazione Illimitata**: Sempre contenuti freschi e originali

### ⚡ Prestazioni Ottimizzate
- **Caricamento Ultra-Veloce**: ~60% più veloce del normale
- **Caching Intelligente**: Funziona offline dopo la prima visita
- **Caricamento Parallelo**: Tutti i dati si caricano simultaneamente
- **Gestione Errori**: Resistente a problemi di rete


## 🛠️ Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Styling responsive
- **Vanilla JavaScript** - Logica di generazione
- **Service Workers** - Caching offline
- **GitHub Pages** - Hosting gratuito

## 📦 Installazione Locale

```bash
# Clona il repository
git clone https://github.com/paulbruzz/generatorediufficialita.git

# Entra nella directory
cd generatorediufficialita

# Apri index.html nel browser
# Oppure usa un server locale:
python -m http.server 8000
# Vai su http://localhost:8000
```

## 🧠 Sistema Anti-Ripetizione

Il generatore implementa un **algoritmo di peso intelligente** che:

- 📊 **Traccia gli ultimi 3 elementi** utilizzati per categoria
- ⚖️ **Riduce la probabilità** di elementi recenti (10-70% in meno)
- 🔄 **Reset automatico** quando tutti gli elementi sono stati usati
- 🎯 **Garantisce varietà** senza sacrificare casualità

### Controlli Avanzati (Console)
```javascript
// Cambiare numero elementi da evitare
setRepetitionSettings(5);

// Reset manuale
resetRecentlyUsed();

// Mostrare statistiche debug
toggleDebugInfo();
```

## ⚡ Ottimizzazioni Prestazioni

### Caricamento Veloce
- **JavaScript Differito**: Non blocca il rendering HTML
- **Caricamento Parallelo**: 7 file simultanei invece che sequenziali
- **DNS Prefetching**: Connessioni pre-stabilite
- **Caching Aggressivo**: Riutilizzo intelligente delle risorse

### Esperienza Utente
- **Indicatori di Carico**: Feedback visuale durante il loading
- **Gestione Errori**: Messaggi chiari in caso di problemi
- **Funzionamento Offline**: Disponibile senza connessione
- **Responsive**: Ottimizzato per mobile e desktop


---

⭐ **Se il progetto ti piace, lascia una stella su GitHub!** ⭐

[🔝 Torna all'inizio](#-generatore-di-ufficialità)