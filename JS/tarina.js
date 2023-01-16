new Vue({
    el: '#demo',

    data: {
        sortKey: 'kahvinnimi',

        reverse: false,

        etsi: '',

        columns: ['kahvinnimi', 'kuvaus'],

        uusiKahvi: {},

        kahvi: [
            { kahvinnimi: 'Ristretto', kuvaus: 'Ristretto tarkoittaa italiaksi ”rajoitettua” tai ”suppeaa”. Se on pieni espresso, johon käytetään normaali määrä kahvijauhetta mutta vain puolet normaalista vesimäärästä. Italiassa siihen käytetään perinteisesti 22 millilitraa kahvijauhetta, kun taas pohjoisessa Euroopassa suositaan isompaa 40 millilitran versiota.' },
            { kahvinnimi: 'Espresso', kuvaus: '1800-luvulla Italiassa kehitetty espresso tehdään työntämällä pieni määrä lähes kiehuvaa eli 86–95-asteista vettä paineistetusti hienojauhoisen kahvin läpi. Täydellisen espresson merkki on sen pinnalle luonnollisesti syntyvä crema eli vaahtokerros.' },
            { kahvinnimi: 'Espresso lungo', kuvaus: 'Lungo tarkoittaa italiaksi pitkää. Espresso lungoon tulee kolme annosta espressoa, jotka valmistetaan kaksinkertaisesta vesimäärästä. Ranskassa saman kahvin nimi on café allongé.' },
            { kahvinnimi: 'Caffè crema', kuvaus: 'Caffè crema tarkoittaa italiaksi kermakahvia. Erityisesti Italian Sveitsin- ja Itävallan-vastaisella rajaseudulla suosittu juoma valmistetaan lisäämällä kermaa tuplaespresson päälle. Tällaisena espresso tunnettiin alun perin 1940- ja 50-luvulla, eli kerman kanssa nautittavana kahvina.' },
            { kahvinnimi: 'Espresso Macchiato', kuvaus: 'Macchiato tarkoittaa ”tahriintunutta”, ja kyseessä on espresso, jonka pinnalle on lisätty loraus vaahdotettua maitoa. Juoma muistuttaa pientä cappuccinoa, mutta on sitä vahvempi ja aromaattisempi.' },
            { kahvinnimi: 'Cappuccino', kuvaus: 'Tyypillinen italialainen juoma, joka valmistetaan espressosta ja kuumasta maidosta sekä höyrytetystä maitovaahdosta. Cappuccinoa ei Italiassa koskaan nautita aamukymmenen jälkeen, mutta muualla Euroopassa se on valtavan suosittu kaikkina päivänaikoina.' },
            { kahvinnimi: 'Latte Macchiato', kuvaus: 'Latte macchiato tarkoittaa italiaksi ”tahriintunutta maitoa”. Lattesta poiketen espresso lisätään maitoon eikä päinvastoin, mikä ”tahrii” maidon. Latte machiatossa on myös enemmän maitovaahtoa kuin lattessa, ja siihen käytetään vähemmän espressoa.' },
            { kahvinnimi: 'Flat white', kuvaus: 'Tämä juoma kehitettiin Uudessa-Seelannissa 1970-luvulla vaihtoehdoksi vaahtoisemmalle cappuccinolle. Tärkein ero onkin, ettei flat white -kahviin tule maitovaahtoa.' },
            { kahvinnimi: 'Caffè americano', kuvaus: 'Myös americanona tunnettuun kahviin lisätään kuumaa vettä, jolloin tuplaespresson vahvuutta voi säätää. Jotkut tekevät americanonsa vain yhdestä espressoannoksesta (30 ml).' },
            { kahvinnimi: 'Caffè Latte', kuvaus: 'Yleisesti cafe au lait -nimellä Euroopassa tunnettua juomaa kutsutaan usein vain latteksi. Nimi tarkoittaa maitokahvia, ja kyse onkin espressosta, johon on lisätty paljon maitoa. Latte on helppo valmistaa myös itse siihen sopivalla keittimellä. Muista kuitenkin, ettet Italiassa tilaa pelkkää ”lattea” – saat nimittäin lasillisen maitoa!' },
            { kahvinnimi: 'Kahvi', kuvaus: 'Isossa kupissa nautittava kahvijuoma valmistetaan kaatamalla kiehuvaa vettä kahvisuodattimessa olevien kahvijauhojen päälle. Sen voi tehdä käsin tai suodatinkeittimellä. Koska valmistamiseen ei liity kovaa painetta, pinnalle ei muodostu vaahtokerrosta, mutta maku on pehmeämpi kuin espressossa. Saksassa perinteinen suodatinkahvi tarjoillaan 125 ml:n kupeissa, kun taas yhdysvaltalaiseen kahvimukiin mahtuu kaksinkertainen määrä. Jos kahviin haluaa maitoa, se lisätään sellaisenaan ilman vaahdotusta. Sokeria tai makeutusainetta voi lisätä maun mukaan – makeinta kahvia nautitaan tiettävästi Brasiliassa. Uusin trendi on lisätä suodatinkahviin ruohoa syöneen lehmän maidosta tehtyä voita, jonka pitäisi auttaa ruokavalion hallinnassa ja energiatason ylläpitämisessä. Suodatinkahvin suosio on viime aikoina lähtenyt uuteen nousuun Euroopassa, ja tätä muotijuomaa valmistetaan nykyään myös kylmänä tai hyvin hitaasti uuttaen. Hidas kahvi valmistetaan muuten kuin tavallinen suodatinkahvi, mutta paljon heikommin läpäisevällä suodattimella, jolloin kahvista tulee hyvin mietoa. Suodatinkahvin kofeiinimäärä riippuu monista tekijöistä: keittoaika, veden lämpötila, seisotusaika, jauhatus, paahtoaste, papulaatu ja paputyyppi. Keskimäärin suodatinkahvissa on vähemmän kofeiinia millilitraa kohden kuin espressossa, mutta koska suodatinkahvia nautitaan paljon suurempina annoksina, kofeiinia saadaan suodatinkahvista noin 90 milligrammaa per annos ja espressosta 40 milligrammaa. Siten kuppia kohden suodatinkahvissa on enemmän kofeiinia.' }
        ]
    },

    methods: {
        sortBy: function(sortKey) {
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;

            this.sortKey = sortKey;
        }
    }
});