var persone = ["50 Cent","Abatantuono","Achille Lauro", "Mario Adinolfi",
  "Adriano Celentano","Adriano Pappalardo","Aida Yespica","Al Bano","Alba Parietti",
  "Alberto Angela","Aldo Baglio","Alessandro Siani","Alex Britti",
  "Alfonso Signorini","Alvaro Soler","Amadeus","Amanda Knox","Amanda Lear",
  "Amber Heard","Ambra Angiolini","Amedeo Preziosi","Ana Mena","Andrea Dovizioso",
  "Andrea Iannone","André Agassi","Angela Merkel","Angelina Jolie","Anna Oxa",
  "Anna Tatangelo","Anne Hathaway","Antonella Clerici","Arisa","Asia Argento",
  "Avril Lavigne","Baby K","Baffo da Crema","Barbara d'Urso","Barbascura X",
  "Barrichello","Belen Rodriguez","Belle Delphine",
  "Bettino Craxi","Beyoncé","Biagio Antonacci","Bianca Atzei","Bill Gates",
  "Billie Eilish","Blanco","Bob Dylan","Bobo Vieri","Bon Jovi","Bono Vox",
  "Boris Johnson","Brad Pitt","Briatore","Britney Spears","Brunetta","Bugo",
  "Calcutta","Calvin Harris","Antonino Cannavacciuolo","Caparezza","Cardi B","Fabio Caressa",
  "Carlo Conti","Carlo Cracco","Carlo Verdone","Carlos Sainz","Carmen Consoli",
  "Carolina Crescentini","Casey Stoner","Sergio Castellitto",
  "Cesare Cremonini","Charlie Chaplin","Charlize Theron","Che Guevara","Checco Zalone",
  "Chiara Ferragni","Christina Aguilera","Cicciogamer","Cipollino Boldi","Ciro Priello",
  "Claudio Amendola","Claudio Baglioni","Claudio Bisio","Clementino","Coez","Conchita Wurst",
  "Corto Maltese","Cristiana Capotondi","Cristina Chiabotto","Cristina D'Avena","D'Alema",
  "Daddy Yankee","Daniel Pedrosa","Daniel Ricciardo","Daniele Silvestri","Dargen D'Amico",
  "Dave Grohl","David Bowie","David Guetta","De Niro","Deadmau5","Demi Lovato",
  "Denzel Washington","Leonardo Di Caprio","Diletta Leotta","Diodato","Dodi Battaglia",
  "Dolcenera","Donatella Rettore","Drake","Drew Barrymore","Drusilla Foer",
  "Dua Lipa","Dylan Dog","Ed Sheeran","Eddie Murphy","Elettra Lamborghini",
  "Elio Germano","Elisabetta Canalis","Elodie","Elon Musk","Elton John",
  "Emanuele Filiberto","Emilio Fede","Eminem","Emis Killa","Emma Bonino","Emma Marrone",
  "Emmanuel Macron","Enea Bastianini","Enrico Letta","Enrico Montesano","Enrico Papi",
  "Enrico Ruggeri","Enrique Iglesias","Enzino Iacchetti","Enzo Dong","Enzo Miccio",
  "Enzo Salvi","Eric Clapton","Ermal Meta","Eros Ramazzotti","Esteban Ocon","Ezio Greggio",
  "Fabio De Luigi","Fabio Fazio","Fabio Quartararo","Fabio Rovazzi",
  "Fabio Volo","Fabri Fibra","Fabrizio Corona","Favij","Favino","Federica Nargi",
  "Federica Pellegrini","Fedez","Fernando Alonso","Fiorella Mannoia","Fiorello",
  "Flavia Vento","Francesca Michielin","Francesco Gabbani","Francesco Pannofino",
  "Francesco Renga","Frank Matano","Fraws","Gabry Ponte","George Clooney","George Russell",
  "Geppi Cucciari","Gerry Scotti","Ghali","Ghemon","Giacomino Poretti","Giancarlo Fisichella",
  "Gianni Celeste","Gianni Morandi","Gigi D'Alessio","Gigi Dag","Giorgio Vanni",
  "Giovanni Muciaccia","Giovanni Storti","Giucas Casella","Giulia De Lellis",
  "Giuliano Ferrara","Giuseppe Conte","Giuseppe Simone","Giusy Ferreri",
  "Greta Thunberg","Gwen Stefani","Harry Styles",
  "Heidi Klum","Iginio Massari","Irama","Irene Grandi","Irene Pivetti",
  "Iva Zanicchi","Izi","J-Ax","J.K. Rowling","James Blunt","Jarno Trulli","Jay-Z",
  "Jeff Bezos","Jennifer Aniston","Jerry Calà","Jimmy Ghione","Joan Mir",
  "Joe Biden","Johnny Bravo","Johnny Depp","Jorge Lorenzo","Jovanotti",
  "Juliana Moreira","Jury Chechi","Justin Bieber","Kanye West","Kate Winslet",
  "Kazuma Kiryu","Keira Knightley","Kevin Magnussen","Kevin Spacey","Khaby Lame",
  "Kim Kardashian","Lance Armstrong","Lance Stroll","Lando Norris","Lara Croft",
  "Latifi","Laura Pausini","Charles Leclerc","Lele Mora","Leonardo Pieraccioni",
  "Lewis Hamilton","Liam Gallagher","Liam Neeson","Ligabue","Lil Pump",
  "Lino Banfi","Lorde","Loredana Bertè","Lorella Cuccarini","Lori Del Santo",
  "Loris Capirossi","Luca Argentero","Luca Bizzarri","Luca Laurenti",
  "Lucianina Littizzetto","Lucio Dalla","Luigi Di Maio","Luisa Ranieri","Valerio Lundini",
  "Lupo Alberto","Vladimir Luxuria","Madonna","Madre Teresa di Calcutta","Mahmood","Cristiano Malgioglio",
  "Manuela Arcuri","Mara Maionchi","Mara Venier","Marc Marquez","Marco Carta",
  "Marco Masini","Marco Mengoni","Marco Rizzo","Margot Robbie","Maria De Filippi",
  "Marilyn Manson","Mario Draghi","Mario Monti","Marracash","Martin Garrix",
  "Martin Scorsese","Massimo Pericolo","Matilda De Angelis","Mattarella","Matteo Berrettini",
  "Maurizio Crozza","Max Biaggi","Max Gazzè","Max Pezzali",
  "Max Verstappen","Megan Fox","Melissa Satta","Enrico Mentana","Michele Bravi","Michele Zarrillo",
  "Michelle Hunziker","Mick Schumacher","Mika","Mike Bongiorno","Miley Cyrus","Milly Carlucci",
  "Milo Manara","Montalbano","Morgan","Motta","Mousse T.","Nancy Brilli","Nanni Moretti",
  "Natalie Imbruglia","Neffa","Nek","Nicholas Cage","Nicki Minaj","Nico Hülkenberg",
  "Nicola Savino","Nicolas Vaporidis","Nicole Kidman","Nina Zilli",
  "Nino Frassica","Nocoldiz","Noel Gallagher","Novak Djokovic","Obama","Oprah","Orietta Berti",
  "il Divino Otelma","Ozzy Osbourne","Paola Turci","Paola e Chiara","Paolo Bonolis","Paolo Fox",
  "Paolo Kessisoglu","Paolo Meneguzzi","Paolo Ruffini","Paolo Sorrentino","Paperino",
  "Paperoga","Paris Hilton","Pato","Paul McCartney","Pavoletti","Pecco Bagnaia",
  "Penelope Cruz","PewDiePie","Pharrell Williams","Piero Pelù","Pierre Gasly",
  "Pigrieco","Pino Insegno","Pino Scotto","Pippo Baudo","Pitbull","Platinette",
  "Pupo","Purple Disco Machine","Quentin Tarantino",
  "Rafael Nadal","Raoul Bova","Renato Zero","Matteo Renzi",
  "Rihanna","Rita Ora","Rkomi","Robbie Williams","Roberto Benigni","Robin Schulz",
  "Roby Facchinetti","Rocco Hunt","Rocco Siffredi","Rockerduck","Roger Federer",
  "Romina Power","Rudy Zerbi","Sabaku No Maiku","Salmo","Matteo Salvini","Samantha Cristoforetti",
  "Sandra Milo","Sangiovanni","Scanzi","Sean Paul","Sebastian Vettel","Selena Gomez",
  "Serena Williams","Sergio Pérez","Sete Gibernau","Sfera Ebbasta","Sgarbi","Shakira",
  "Simona Ventura","Snoop Dogg","Solid Snake","Stefano Accorsi","Steve Aoki",
  "Stevie Wonder","Sting","Stromae","Sylvester Stallone","Tananai","Taxi B",
  "Taylor Swift","Tedua","Terence Hill","Teresa Mannino","Tex Willer","The Weeknd",
  "Timbaland","Tina Turner","Tiziano Ferro","Tom Cruise","Tommaso Paradiso",
  "Tommaso Zorzi","Toni Servillo","Tony Effe","Topo Gigio","Topolino","Toto Cutugno",
  "Travis Scott","Donald Trump","Tullio Solenghi","Ultimo","Umberto Smaila","Ursula Von Der Leyen",
  "Valentino Rossi","Valerio Scanu","Valerio Staffelli","Valtteri Bottas","Vanessa Incontrada",
  "Varriale","Vasco Rossi","Antonello Venditti","Vin Diesel","Vincenzo Mollica","Vinicio Capossela",
  "Wanda Nara","Wanna Marchi","Whoopi Goldberg","Will Smith","Willie Peyote",
  "Wiz Khalifa","Woody Allen","Young Signorino","Yuki Tsunoda","Zagor",
  "Ivan Zazzaroni","Antonio Zequila","Zerocalcare","Zio Paperone","Zucchero Fornarciari",
  "il Dalai Lama","il Gabibbo","il Mago Forest",
  "il Mago Silvan","il Trio Medusa","il commissario Basettoni","Giorgia Meloni"];

  var personePlurale = ["Le Vibrazioni", "Benji & Fede", "Castolo e Ximenes", "Fabio & Mingo",
  "gli Evanescence", "gli Iron Maiden","gli Zero Assoluto", "Giò Di Tonno e Lola Ponce",
  "i Backstreet Boys","i Black Eyed Peas", "i Club Dogo","i Coldplay","i Daft Punk",
  "i Depeche Mode","i Good Charlotte","i Green Day","i Jamiroquai","i Maneskin",
  "i Maroon 5","i Me contro Te","i Modà","i Negrita","i Pantellas",
  "i Pinguini Tattici Nucleari","i Planet Funk","i Rammstein","i Subsonica",
  "i due Fantagenitori","le Superchicche","le gemelle Olsen","Lillo & Greg", "Quei Due sul Server"];

  var squadre = ["al Barcellona","al Bari","al Basilea","al Bayer Leverkusen",
  "al Bayern","al Benevento","al Benfica","al Besiktas","al Betis","al Bilbao",
  "al Blackburn","al Boca Juniors","al Bologna","al Borussia Dortmund",
  "al Borussia M'gladbach","al Botafogo","al Brentford","al Brescia","al Brighton",
  "al Burnley","al CFR Cluj","al Cagliari","al Carpi","al Casale","al Catania",
  "al Catanzaro","al Celta Vigo","al Cesena","al Chelsea","al Chievo","al Colonia",
  "al Como","al Corinthians","al Crotone","al Cruzeiro","al Crystal Palace",
  "al Fenerbahce","al Feyenoord","al Flamengo","al Foggia","al Frosinone",
  "al Galatasaray","al Genoa","al Getafe","al Girona","al Grêmio","al L.A. Galaxy",
  "al Lecce","al Lecco","al Leeds","al Leganés","al Legia Varsavia","al Legnano",
  "al Leicester","al Levante","al Lione","al Lipsia","al Liverpool","al Livorno",
  "al Lorient","al Ludogorets","al Magonza","al Manchester City","al Manchester United",
  "al Mantova","al Messina","al Milan","al Modena","al Napoli","al Newcastle","al Norwich",
  "al Nottingham Forrest","al Novara",  "al PAOK","al PSG","al PSV Eindhoven",
  "al Paderborn","al Padova","al Palermo","al Palmeiras","al Panathinaikos",
  "al Parma","al Partizan Belgrado","al Perugia","al Pescara","al Piacenza","al Pisa",
  "al Porto","al Rapid Vienna","al Rayo Vallecano","al Real Madrid","al River Plate",
  "al Rosenborg","al Saint Etienne","al San Paolo","al Santos","al Sassuolo","al Siena",
  "al Siviglia","al Southampton","al Torino","al Tottenham","al Treviso","al Valencia",
  "al Valladolid","al Varese","al Vasco da Gama","al Venezia","al Vicenza","al Villarreal",
  "al Watford","al Werder Brema","al West Ham","al Wolfsburg","al Wolverhampton",
  "all'AEK Atene","all'Ajax","all'Alavés","all'Alessandria","all'Amburgo","all'Ancona",
  "all'Anderlecht","all'Arsenal","all'Ascoli","all'Aston Villa","all'Atalanta",
  "all'Atlético Madrid","all'Avellino","all'Eibar","all'Eintracht","all'Empoli",
  "all'Espanyol","all'Everton","all'Hellas Verona","all'Hertha Berlino","all'Hoffenheim",
  "all'Huesca","all'Inter","all'Olympique Marsiglia","all'Udinese","alla Cremonese",
  "alla Dinamo Bucarest","alla Dinamo Kiev","alla Dinamo Zagabria","alla Fiorentina",
  "alla Fluminense","alla Juve","alla Lazio","alla Lucchese","alla Pistoiese",
  "alla Pro Patria","alla Pro Vercelli","alla Real Sociedad","alla Reggiana",
  "alla Reggina","alla Roma","alla SPAL","alla Salernitana","alla Samp",
  "alla Stella Rossa","alla Ternana","alla Triestina","allo Schalke","allo Shakhtar",
  "allo Spezia","allo Sporting Lisbona"];

  var perSquadre = ["per il Barcellona","per il Bari","per il Basilea","per il Bayer Leverkusen",
  "per il Bayern","per il Benevento","per il Benfica","per il Besiktas","per il Betis","per il Bilbao",
  "per il Blackburn","per il Boca Juniors","per il Bologna","per il Borussia Dortmund",
  "per il Borussia M'gladbach","per il Botafogo","per il Brentford","per il Brescia","per il Brighton",
  "per il Burnley","per il CFR Cluj","per il Cagliari","per il Carpi","per il Casale","per il Catania",
  "per il Catanzaro","per il Celta Vigo","per il Cesena","per il Chelsea","per il Chievo","per il Colonia",
  "per il Como","per il Corinthians","per il Crotone","per il Cruzeiro","per il Crystal Palace",
  "per il Fenerbahce","per il Feyenoord","per il Flamengo","per il Foggia","per il Frosinone",
  "per il Galatasaray","per il Genoa","per il Getafe","per il Girona","per il Grêmio","per il L.A. Galaxy",
  "per il Lecce","per il Lecco","per il Leeds","per il Leganés","per il Legia Varsavia","per il Legnano",
  "per il Leicester","per il Levante","per il Lione","per il Lipsia","per il Liverpool","per il Livorno",
  "per il Lorient","per il Ludogorets","per il Magonza","per il Manchester City","per il Manchester United",
  "per il Mantova","per il Messina","per il Milan","per il Modena","per il Napoli","per il Newcastle","per il Norwich",
  "per il Nottingham Forrest","per il Novara",  "per il PAOK","per il PSG","per il PSV Eindhoven",
  "per il Paderborn","per il Padova","per il Palermo","per il Palmeiras","per il Panathinaikos",
  "per il Parma","per il Partizan Belgrado","per il Perugia","per il Pescara","per il Piacenza","per il Pisa",
  "per il Porto","per il Rapid Vienna","per il Rayo Vallecano","per il Real Madrid","per il River Plate",
  "per il Rosenborg","per il Saint Etienne","per il San Paolo","per il Santos","per il Sassuolo","per il Siena",
  "per il Siviglia","per il Southampton","per il Torino","per il Tottenham","per il Treviso","per il Valencia",
  "per il Valladolid","per il Varese","per il Vasco da Gama","per il Venezia","per il Vicenza","per il Villarreal",
  "per il Watford","per il Werder Brema","per il West Ham","per il Wolfsburg","per il Wolverhampton",
  "per l'AEK Atene","per l'Ajax","per l'Alavés","per l'Alessandria","per l'Amburgo","per l'Ancona",
  "per l'Anderlecht","per l'Arsenal","per l'Ascoli","per l'Aston Villa","per l'Atalanta",
  "per l'Atlético Madrid","per l'Avellino","per l'Eibar","per l'Eintracht","per l'Empoli",
  "per l'Espanyol","per l'Everton","per l'Hellas Verona","per l'Hertha Berlino","per l'Hoffenheim",
  "per l'Huesca","per l'Inter","per l'Olympique Marsiglia","per l'Udinese","per la Cremonese",
  "per la Dinamo Bucarest","per la Dinamo Kiev","per la Dinamo Zagabria","per la Fiorentina",
  "per la Fluminense","per la Juve","per la Lazio","per la Lucchese","per la Pistoiese",
  "per la Pro Patria","per la Pro Vercelli","per la Real Sociedad","per la Reggiana",
  "per la Reggina","per la Roma","per la SPAL","per la Salernitana","per la Samp",
  "per la Stella Rossa","per la Ternana","per la Triestina","per lo Schalke","per lo Shakhtar",
  "per lo Spezia","per lo Sporting Lisbona"];

  var conSquadre = ["con il Barcellona","con il Bari","con il Basilea","con il Bayer Leverkusen",
  "con il Bayern","con il Benevento","con il Benfica","con il Besiktas","con il Betis","con il Bilbao",
  "con il Blackburn","con il Boca Juniors","con il Bologna","con il Borussia Dortmund",
  "con il Borussia M'gladbach","con il Botafogo","con il Brentford","con il Brescia","con il Brighton",
  "con il Burnley","con il CFR Cluj","con il Cagliari","con il Carpi","con il Casale","con il Catania",
  "con il Catanzaro","con il Celta Vigo","con il Cesena","con il Chelsea","con il Chievo","con il Colonia",
  "con il Como","con il Corinthians","con il Crotone","con il Cruzeiro","con il Crystal Palace",
  "con il Fenerbahce","con il Feyenoord","con il Flamengo","con il Foggia","con il Frosinone",
  "con il Galatasaray","con il Genoa","con il Getafe","con il Girona","con il Grêmio","con il L.A. Galaxy",
  "con il Lecce","con il Lecco","con il Leeds","con il Leganés","con il Legia Varsavia","con il Legnano",
  "con il Leicester","con il Levante","con il Lione","con il Lipsia","con il Liverpool","con il Livorno",
  "con il Lorient","con il Ludogorets","con il Magonza","con il Manchester City","con il Manchester United",
  "con il Mantova","con il Messina","con il Milan","con il Modena","con il Napoli","con il Newcastle","con il Norwich",
  "con il Nottingham Forrest","con il Novara",  "con il PAOK","con il PSG","con il PSV Eindhoven",
  "con il Paderborn","con il Padova","con il Palermo","con il Palmeiras","con il Panathinaikos",
  "con il Parma","con il Partizan Belgrado","con il Perugia","con il Pescara","con il Piacenza","con il Pisa",
  "con il Porto","con il Rapid Vienna","con il Rayo Vallecano","con il Real Madrid","con il River Plate",
  "con il Rosenborg","con il Saint Etienne","con il San Paolo","con il Santos","con il Sassuolo","con il Siena",
  "con il Siviglia","con il Southampton","con il Torino","con il Tottenham","con il Treviso","con il Valencia",
  "con il Valladolid","con il Varese","con il Vasco da Gama","con il Venezia","con il Vicenza","con il Villarreal",
  "con il Watford","con il Werder Brema","con il West Ham","con il Wolfsburg","con il Wolverhampton",
  "con l'AEK Atene","con l'Ajax","con l'Alavés","con l'Alessandria","con l'Amburgo","con l'Ancona",
  "con l'Anderlecht","con l'Arsenal","con l'Ascoli","con l'Aston Villa","con l'Atalanta",
  "con l'Atlético Madrid","con l'Avellino","con l'Eibar","con l'Eintracht","con l'Empoli",
  "con l'Espanyol","con l'Everton","con l'Hellas Verona","con l'Hertha Berlino","con l'Hoffenheim",
  "con l'Huesca","con l'Inter","con l'Olympique Marsiglia","con l'Udinese","con la Cremonese",
  "con la Dinamo Bucarest","con la Dinamo Kiev","con la Dinamo Zagabria","con la Fiorentina",
  "con la Fluminense","con la Juve","con la Lazio","con la Lucchese","con la Pistoiese",
  "con la Pro Patria","con la Pro Vercelli","con la Real Sociedad","con la Reggiana",
  "con la Reggina","con la Roma","con la SPAL","con la Salernitana","con la Samp",
  "con la Stella Rossa","con la Ternana","con la Triestina","con lo Schalke","con lo Shakhtar",
  "con lo Spezia","con lo Sporting Lisbona"];

var cities = [
  "ADRIANOPOLI", "AGROPOLI", "ALBA ADRIATICA", "ALBA", "ALGHERO", "ALMERE", "ALTOPASCIO", 
  "ANCONA", "AMSTERDAM", "ANDRIA", "AREZZO", "ATENE", "BANGKOK", "BARCELLONA", "BARI", 
  "BASILEA", "BELGRADO", "BERGAMO", "BERLINO", "BOLOGNA", "BOLZANO", "BRESCIA", "BRUXELLES", 
  "BUDAPEST", "CAGLIARI", "CATANIA", "CESENA", "DENVER", "DUBAI", "FERRARA", "FIRENZE", 
  "FOGGIA", "FORLÌ", "FRANCOFORTE", "GENOVA", "GIUGLIANO IN CAMPANIA", "GOTHENBURG", 
  "HELSINKI", "HONG KONG", "ISTANBUL", "KUALA LUMPUR", "LAS VEGAS", "LIVORNO", "LONDRA", 
  "LUXEMBOURG", "MADRID", "MAIORCA", "MIAMI", "MILANO", "MODENA", "MONACO DI BAVIERA", 
  "MONZA", "MOSCA", "MUMBAI", "NAPOLI", "NOVARA", "PADOVA", "PARIGI", "PARMA", "PESCARA", 
  "PERUGIA", "PRAGA", "PRATO", "RAVENNA", "REGGIO CALABRIA", "REGGIO EMILIA", "RIMINI", 
  "ROMA", "SALERNO", "SASSARI", "SEUL", "SHENZHEN", "SINGAPORE", "SOFIA", "STOCCOLMA", 
  "TARANTO", "TERNI", "TRENTO", "TRIESTE", "TOKYO", "UDINE", "VENEZIA", "VERONA", "VIENNA", 
  "VILNIUS", "ZAGABRIA", "ZURIGO", "ABU DHABI", "ACIREALE", "ALESSANDRIA", "ALICANTE", "AMALFI", 
  "ANTALYA", "ASTI", "AVELLINO", "BARLETTA", "BATTIPAGLIA", "BELLUNO", "BENEVENTO", "BIARRITZ", 
  "BRINDISI", "CALTANISSETTA", "CANTÙ", "CAPRI", "CASERTA", "CASTELLAMMARE DI STABIA", 
  "CIVITAVECCHIA", "COPENAGHEN", "COSENZA", "COURMAYEUR", "CREMONA", "CROTONE", "CUNEO",
  "DRESDA", "DUBLIN", "EDIMBURGO", "FOLIGNO", "GALLIPOLI", "GELA", "GORIZIA", "IMOLA", 
  "JESI", "LECCE", "LIONE", "LUCCA", "MACERATA", "MALTA", "MATERA", "MELBOURNE", 
  "NIZZA", "OLBIA", "ORTONA", "PAVIA", "PIOMBINO", "PISA", "PORTOFINO", "SANREMO", "SIRACUSA"
];
  var intro = ["Mancava l'ufficialità, ora è arrivata:", "Finalmente è ufficiale:", "Bomba di calciomercato:",
  "Pazzesco:", "Dopo una lunga trattativa,", "Dopo una trattativa-lampo che ha stupito gli addetti ai lavori,",
  "Finalmente il sogno è realtà:", "Ora i tifosi sognano:", "Assurdo:", "Da non crederci:",
  "Sembrava impossibile, e invece è successo:", "Dopo che la trattativa sembrava essere naufragata,", "Incredibile:",
  "Contro ogni aspettativa,", "Come ampiamente previsto,", "Era nell'aria già da tempo, ma ora è ufficiale:",
  "Le voci erano vere:", "Finalmente è stato raggiunto l'accordo:", "La trattativa si è conclusa nel migliore dei modi:", 
  "Non ci sono più dubbi:", "Un annuncio che scuote il mercato:", "Dopo settimane di attesa,", 
  "La notizia che tutti aspettavano:", "La sorpresa del giorno arriva da:", "Colpo sensazionale:", 
  "Dopo una lunga attesa, è arrivato il momento:", "Dopo rumors e speculazioni,", "Il colpo del secolo si è concretizzato:", 
  "Tutto confermato:", "È fatta:", "Alla fine, la trattativa ha avuto esito positivo:", 
  "Ufficiale, il colpo è stato messo a segno:", "Il mercato non smette di sorprendere:", "Clamoroso annuncio:", 
  "Finalmente si è chiuso l'accordo atteso da molti:", "Un colpo di scena improvviso:", 
  "Nessuno se lo aspettava, ma è successo:", "La telenovela di mercato si è conclusa:", 
  "Ora è tutto vero:", "Le carte sono state firmate:", "È arrivato il momento tanto atteso:", 
  "L'affare si è concluso con successo:", "Dopo un'operazione complessa, l'accordo è ufficiale:", 
  "Svelato il mistero dietro la trattativa:", "Dopo giorni di trattative serrate,", 
  "Un colpo che fa discutere:", "Il mercato si infiamma con questa notizia:", 
  "Dopo settimane di voci, ora è certezza:", "Arriva una conferma importante:", 
  "Dopo aver tenuto tutti col fiato sospeso,", "Un colpo che scuote tutto il calcio europeo:", 
  "L'operazione è stata conclusa con successo:", "Confermata la notizia tanto attesa:", 
  "Un altro colpo per rinforzare la squadra:", "Una trattativa che ha sorpreso tutti:", 
  "Finalmente è arrivata la firma:", "Dopo un lungo tira e molla,", 
  "Arriva l'annuncio ufficiale che tutti aspettavano:", "Un affare che cambia gli equilibri del mercato:", 
  "Tutti i dettagli sono stati definiti:", "La firma è arrivata dopo una lunga negoziazione:", 
  "L'annuncio è arrivato proprio oggi:", "La trattativa è stata portata a termine con successo:", 
  "Svelato l'accordo tra le due squadre:", "Una mossa di mercato decisiva:", 
  "Il club ha fatto il colpaccio:", "Il calciomercato regala un'altra sorpresa:", 
  "Dopo giorni di silenzio, ecco la notizia:", "Una notizia che farà discutere a lungo:", 
  "L'ufficialità è arrivata proprio in queste ore:", "Un'operazione di mercato da capogiro:", 
  "I tifosi possono finalmente esultare:", "Il club ha chiuso una trattativa importante:", 
  "Una delle operazioni di mercato più attese:", "Una notizia che scuote tutto l'ambiente calcistico:", 
  "Confermata l'operazione a sorpresa:", "Un altro colpo da maestro per il club:", 
  "Un trasferimento che cambierà il volto della squadra:", "Dopo tante voci, ecco l'annuncio ufficiale:", 
  "Il club ha sorpreso tutti con questa mossa di mercato:", "Un'operazione fulminea che ha colto tutti di sorpresa:", 
  "Le firme sono arrivate, ora è tutto confermato:", "Finalmente è arrivata l'ufficialità tanto attesa:", 
  "L'accordo è stato raggiunto dopo intense trattative:", "L'annuncio è stato fatto oggi stesso:", 
  "Il colpo è stato messo a segno con grande rapidità:", "Dopo mesi di speculazioni, ora è ufficiale:"];

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


  window.onload = function(){
    getUfficialita();
  }

  function getUfficialita(){
    var randomSquadra = squadre[Math.floor(Math.random() * squadre.length)];
    var introRandom = intro[Math.floor(Math.random() * intro.length)];
    var terminiRandom = termini[Math.floor(Math.random() * termini.length)];
    var indiceSquadra = squadre.indexOf(randomSquadra);
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
        var randomPersona = persone[Math.floor(Math.random() * persone.length)];
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
        var randomPersona = persone[Math.floor(Math.random() * persone.length)];
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
