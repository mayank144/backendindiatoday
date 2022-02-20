const express = require('express');
const router = express.Router();

const articles = [{
        "source": {
            "id": null,
            "name": "bdnews24.com"
        },
        "author": "Aaron Mak",
        "title": "For companies, winning in China now means losing somewhere else",
        "description": "Companies usually shell out for Olympic sponsorship because it helps their business and reflects well on their brands. But this year, with the Olympics in Beijing, Procter & Gamble paid even more to try to prevent any negative fallout from being associated wi…",
        "url": "https://bdnews24.com/business/2022/02/19/for-companies-winning-in-china-now-means-losing-somewhere-else",
        "urlToImage": "https://d30fl32nd2baj9.cloudfront.net/media/2022/02/19/china-us-olympics-190222-01-smr.jpg1/BINARY/china-us-olympics-190222-01-smr.jpg",
        "publishedAt": "2022-02-19T11:48:46Z",
        "content": "The company, one of 13 worldwide Olympic partners\r\nthat make the global sports competition possible, hired Washington lobbyists\r\nlast year to successfully defeat legislation that would have barred sp… [+8385 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Tech Desk",
        "title": "Tesla to accept Dogecoin as payment at Supercharging station, says Elon Musk",
        "description": "Elon Musk on Twitter announced that Tesla charging station will soon accept cryptocurrency Dogecoin as a mode of payment.",
        "url": "https://indianexpress.com/article/technology/crypto/tesla-to-accept-dogecoin-as-payment-for-supercharging-station-says-elon-musk-7781371/",
        "urlToImage": "https://images.indianexpress.com/2022/02/Untitled-design-61.jpg",
        "publishedAt": "2022-02-19T11:30:08Z",
        "content": "Tesla CEO Elon Musk on Saturday announced on Twitter that its supercharging station at Santa Monica will soon accept cryptocurrency Dogecoin as a mode of payment. Following the announcement, Dogecoin… [+1876 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Finance.ua"
        },
        "author": "Економічна Правда",
        "title": "В прошлом году мировые продажи электромобилей возросли на 109% – исследование",
        "description": "В 2021 году во всем мире было продано 6,5 млн электромобилей (EV), что на 109% больше, чем в 2020-м.",
        "url": "https://news.finance.ua/ru/news/-/508891/v-proshlom-godu-mirovye-prodazhi-elektromobilej-vozrosli-na-109-issledovanie",
        "urlToImage": "http://resources.finance.ua/ru/news/image-repost?id=508891",
        "publishedAt": "2022-02-19T11:20:00Z",
        "content": "2021 6,5 (EV), 109% , 2020-.\r\n Canalys.\r\n, 9% . , - COVID- 2021 4%.\r\n“ 2021 , , , ”, – .\r\n, 85% , , .\r\n 2021 3,2 , 15% .\r\n 2,3 , 19% .\r\n“ 2021 3,2 – , , 2 , 2020 ”, – Canalys.\r\n , . 4% , 2021 , . \r\n:… [+85 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Everyeye.it"
        },
        "author": "Alberto Lala",
        "title": "Dogecoin, tweet di Musk sulle stazioni di servizio Tesla e la memecoin impenna",
        "description": "Un picco vertiginoso di valore per il token DOGE nella mattina del 19 febbraio 2022: cosa centrano le aree di servizio Tesla?Mentre il weekend delle criptovalute è in rosso, una voce fuori dal coro è Dogecoin, tirata in ballo, ancora una volta, dal suo più fa…",
        "url": "https://tech.everyeye.it/notizie/dogecoin-tweet-musk-stazioni-servizio-tesla-mercato-tilt-571209.html",
        "urlToImage": "https://images.everyeye.it/img-notizie/dogecoin-tweet-musk-stazioni-servizio-tesla-memecoin-impenna-v4-571209.jpg",
        "publishedAt": "2022-02-19T11:14:00Z",
        "content": "Mentre il weekend delle criptovalute è in rosso, una voce fuori dal coro è Dogecoin, tirata in ballo, ancora una volta, dal suo più famoso sostenitore, Elon Musk. Scopriamo cosa ha detto sul suo prof… [+1316 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "National Observer"
        },
        "author": "Max Fawcett",
        "title": "Your next car will be electric. Why did it take so long?",
        "description": "When future historians go looking for the moment when the electric vehicle revolution truly got underway, they might end up pinpointing last Sunday’s Super Bowl, writes columnist Max Fawcett.",
        "url": "https://www.nationalobserver.com/2022/02/19/opinion/your-next-car-will-be-electric-why-did-it-take-so-long",
        "urlToImage": "https://www.nationalobserver.com/sites/nationalobserver.com/files/img/2022/02/18/nissan_electric_vehicle.jpg",
        "publishedAt": "2022-02-19T11:10:04Z",
        "content": "When future historians go looking for the moment when the electric vehicle revolution truly got underway, they might end up pinpointing last Sunday’s Super Bowl. That’s because amid the ups and downs… [+5249 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Motorpasión"
        },
        "author": "Irene Mendoza",
        "title": "El barco eléctrico Candela C-8 quiere pulverizar todos los récords de autonomía, y está a punto de entrar en producción",
        "description": "Solo han pasado unos meses desde que Candela, una start-up con sede en Estocolmo, anunció planes para producir su hidroala eléctrica C8, pero gracias a que con la última ronda de financiación sumó 24 millones de euros a las arcas de la compañía, el proyecto a…",
        "url": "https://www.motorpasion.com/futuro-movimiento/barco-electrico-candela-c-8-quiere-pulverizar-todos-record-autonomia-esta-a-punto-entrar-produccion",
        "urlToImage": "https://img.remediosdigitales.com/d23231/apercandela/840_560.jpeg",
        "publishedAt": "2022-02-19T11:01:56Z",
        "content": "Solo han pasado unos meses desde que Candela, una start-up con sede en Estocolmo, anunció planes para producir su hidroala eléctrica C8, pero gracias a que con la última ronda de financiación sumó 24… [+4446 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Frandroid"
        },
        "author": "Bob Jouy",
        "title": "Tesla Model S et Model X 2022 : tout ce que l’on sait des versions européennes à venir",
        "description": "Les flagships de Tesla que sont les Model S et Model X sont aux abonnés absents depuis le milieu de l’année 2020 en Europe. Le cru 2022 va peut-être changer la donne, avec le retour tant attendu des deux véhicules haut de gamme du constructeur sur le Vieux co…",
        "url": "https://www.frandroid.com/marques/tesla/1226553_tesla-model-s-et-model-x-2022-tout-ce-que-lon-sait-des-versions-europeennes-a-venir",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2022/02/model-s-model-x-2022-tesla.jpg",
        "publishedAt": "2022-02-19T11:01:04Z",
        "content": "Les flagships de Tesla que sont les Model S et Model X sont aux abonnés absents depuis le milieu de lannée 2020 en Europe. Le cru 2022 va peut-être changer la donne, avec le retour tant attendu des d… [+9106 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sputnik International"
        },
        "author": "Sputnik Türkiye",
        "title": "SEC, Twitter paylaşımları nedeniyle Elon Musk'ı 'taciz' ettikleri iddialarını reddetti",
        "description": "ABD Menkul Kıymetler ve Borsa Komisyonu (SEC), Twitter paylaşımları nedeniyle elektrikli otomobil üreticisi Tesla'nın Üst Yöneticisi (CEO) Elon Musk'ı \"taciz\" ettikleri iddialarını reddetti.",
        "url": "https://tr.sputniknews.com/20220219/sec-twitter-paylasimlari-nedeniyle-elon-muski-taciz-ettikleri-iddialarini-reddetti-1054025816.html",
        "urlToImage": "https://cdnntr1.img.sputniknews.com/images/sharing/article/tur/1054025816.jpg?10520544921645268246",
        "publishedAt": "2022-02-19T10:57:25Z",
        "content": "Rusya, ABD, Avrupa ve Ortadou bata olmak üzere dünyann dört bir yanndan son dakika haberleri, analizler ve özel dosyalar.\r\nhttps://tr.sputniknews.com/20220219/sec-twitter-paylasimlari-nedeniyle-elon-… [+4599 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Week Magazine"
        },
        "author": "The Week Staff",
        "title": "The electric-vehicle revolution",
        "description": "Battery-powered cars and trucks are selling briskly. Will they soon rule the road? Here's everything you need to know:\nWhat's changed?\nElectric vehicles have become the hottest cars on the market. Demand for vehicles that run solely on batteries is so great t…",
        "url": "https://theweek.com/business/1010328/the-electric-vehicle-revolution",
        "urlToImage": "https://mediacloud.theweek.com/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1645133610/GettyImages-1075255522.jpg",
        "publishedAt": "2022-02-19T10:52:09Z",
        "content": "Battery-powered cars and trucks are selling briskly. Will they soon rule the road? Here's everything you need to know:\r\nWhat's changed?\r\nElectric vehicles have become the hottest cars on the market. … [+6110 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "The Week Staff",
        "title": "The electric-vehicle revolution",
        "description": "Battery-powered cars and trucks are selling briskly. Will they soon rule the road?",
        "url": "https://news.yahoo.com/electric-vehicle-revolution-105209566.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Ppx45e7JwU.J7S360dr.Mw--~B/aD01NTQ7dz04NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_week_574/f427a2b5e779b5e66ecc97e08c793557",
        "publishedAt": "2022-02-19T10:52:09Z",
        "content": "An electric car. EZEQUIEL BECERRA/AFP via Getty Images \r\nBattery-powered cars and trucks are selling briskly. Will they soon rule the road? Here's everything you need to know:\r\nWhat's changed?\r\nElect… [+6384 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Slate Magazine"
        },
        "author": "Aaron Mak",
        "title": "How Many Simultaneous Scandals Can Elon Musk Survive?",
        "description": "Even for the Tesla CEO, there are a shocking number of them right now.",
        "url": "https://slate.com/technology/2022/02/elon-musk-scandals-fremont-neuralink-tesla-recall.html",
        "urlToImage": "https://compote.slate.com/images/5a1454fa-a3ca-43f0-81f5-3bc1947af33d.jpeg?width=780&height=520&rect=6036x4024&offset=12x0",
        "publishedAt": "2022-02-19T10:50:00Z",
        "content": "Elon Musk is having a terrible February. At the moment, the Tesla and SpaceX CEO is facing scrutiny from three different government agencies, an animal-cruelty scandal, a car recall, a failed satelli… [+6572 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Katie Brockman)",
        "title": "2 Reasons to Invest in Crypto -- And 1 Reason Not To",
        "description": "Crypto could be lucrative, but is it right for you?",
        "url": "https://www.fool.com/investing/2022/02/19/2-reasons-to-invest-in-crypto-and-1-reason-not-to/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/666512/bitcoin-symbol-made-from-numbers.jpg",
        "publishedAt": "2022-02-19T10:45:00Z",
        "content": "It's no secret that cryptocurrency is one of the hottest investments of the past year, but it's also incredibly divisive and controversial.\r\nWhile some believe crypto is a revolutionary technology wi… [+3607 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Wall-street.ro"
        },
        "author": "office@wall-street.ro (Redactia Wall-Street)",
        "title": "De ce Elon Musk a renunțat la facultate după doar două zile",
        "description": "Elon Musk și-a câștigat atât popularitatea, cât și antipatia pentru deciziile controversate pe care le-a făcut lungul timpului. Excentricul miliardar este cunoscut pentru numeroasele sale acțiuni neobișnuite, printre care demnă de amintit este cea în care și-…",
        "url": "https://www.wall-street.ro/articol/International/282157/de-ce-elon-musk-a-renuntat-la-facultate-dupa-doar-doua-zile.html",
        "urlToImage": "https://www.wall-street.ro/article_pictures/282157_articol.jpg?v=1645270595",
        "publishedAt": "2022-02-19T10:43:07Z",
        "content": "Elon Musk i-a câtigat atât popularitatea, cât i antipatia pentru deciziile controversate pe care le-a fcut lungul timpului. Excentricul miliardar este cunoscut pentru numeroasele sale aciuni neobinui… [+3529 chars]"
    },
    {
        "source": {
            "id": "news24",
            "name": "News24"
        },
        "author": "Walter Sinn",
        "title": "News24.com | Musk donates satellite gear to reconnect Tonga",
        "description": "Tonga says space entrepreneur and Tesla founder Elon Musk has donated 50 satellite terminals to help the volcano-damaged Pacific island reconnect with the world.",
        "url": "https://www.news24.com/news24/Africa/News/musk-donates-satellite-gear-to-reconnect-tonga-20220219",
        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3101/0de61ef225ca4e9aaa580775e801f68e.jpg",
        "publishedAt": "2022-02-19T10:39:36Z",
        "content": "Tonga says space entrepreneur and Tesla founder Elon Musk has donated 50 satellite terminals to help the volcano-damaged Pacific island reconnect with the world.\r\nTonga's telecommunications system ha… [+1101 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Montevideo.com.uy"
        },
        "author": "Montevideo Portal",
        "title": "Elon Musk dona equipo satelitar para reconectar a Tonga tras erupción y tsunami",
        "description": "Tonga indicó que el empresario espacial y fundador de Tesla Elon Musk donó 50 terminales de satélite para ayudar a la reconección",
        "url": "https://www.montevideo.com.uy/Ciencia-y-Tecnologia/Elon-Musk-dona-equipo-satelitar-para-reconectar-a-Tonga-tras-erupcion-y-tsunami-uc813348",
        "urlToImage": "https://imagenes.montevideo.com.uy/imgnoticias/202108/_W933_80/770848.jpg",
        "publishedAt": "2022-02-19T10:35:00Z",
        "content": "Tonga indicó que el empresario espacial y fundador de Tesla Elon Musk donó 50 terminales de satélite para ayudar a reconectar con el mundo este archipiélago del Pacífico que sufrió en enero una erupc… [+982 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Elconfidencial.com"
        },
        "author": "A. N.",
        "title": "La gente medieval dormía de otra manera: ¿por qué dejamos de hacerlo?",
        "description": "En el pasado la gente solía dormir en dos tramos durante la noche, y aprovechaba para rezar, ir a visitar a sus vecinos o charlar en la cama y compartir confidencias",
        "url": "https://www.elconfidencial.com/alma-corazon-vida/2022-02-19/la-gente-medieval-dormia-de-otra-manera-dejamos_3355698/",
        "urlToImage": "https://images.ecestaticos.com/R5PTrZez-5i_2zFwCYVYouCrQSY=/0x0:1681x883/600x315/filters:fill(white):format(jpg):watermark(f.elconfidencial.com/file/a73/f85/d17/a73f85d17f0b2300eddff0d114d4ab10.png,0,275,1)/f.elconfidencial.com/original/244/a46/0be/244a460bef6aa4dd84f4e55c72a6f469.jpg",
        "publishedAt": "2022-02-19T10:32:00Z",
        "content": "Hay pocas cosas en la vida en la que toda la humanidad se ponga de acuerdo, a pesar de que en estos tiempos pandémicos hemos podido observar con perplejidad cómo el mundo entero se confinaba y aplica… [+8298 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "stabahriti@insider.com (Sam Tabahriti)",
        "title": "The SEC pushes back after Elon Musk accused the agency of harassment and withholding $40 million in funds",
        "description": "Elon Musk has accused the Securities and Exchange Commission of harassment but the regulator disagreed with the accusations.",
        "url": "https://www.businessinsider.com/sec-pushes-back-elon-musk-accusations-harassment-2022-2",
        "urlToImage": "https://i.insider.com/6210b761462ff20019c5d1f7?width=1200&format=jpeg",
        "publishedAt": "2022-02-19T10:23:41Z",
        "content": "The Securities and Exchange Commission (SEC) issued a letter to a federal judge following Elon Musk's accusations of the agency conducting \"endless, unfounded investigations\" into him and Tesla.\r\nThe… [+2168 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "manager-magazin.de"
        },
        "author": "Walter Sinn",
        "title": "Gehalt ist nicht mehr das entscheidende Jobkriterium",
        "description": "Weltweit überdenken viele Beschäftigte ihre Work-Life-Balance. Ein gutes Gehalt ist dabei gerade in Deutschland nicht mehr zwingend das entscheidende Jobkriterium. Für Unternehmen geht es jetzt darum, noch stärker auf den Faktor Mensch zu setzen.",
        "url": "https://www.manager-magazin.de/politik/gehalt-ist-nicht-mehr-das-entscheidende-jobkriterium-a-97db96e8-20a3-417c-8ea4-e9f78b33f345",
        "urlToImage": "https://cdn.prod.www.manager-magazin.de/images/c096771f-4436-4c22-8344-d8ba48b6bae2_w1280_r1.77_fpx68.74_fpy45.jpg",
        "publishedAt": "2022-02-19T10:22:29Z",
        "content": "Mitte der 1960er-Jahre prognostizierte der US-amerikanische Thinktank RAND Corporation, dass die Menschheit bis 2020 intelligente Affen züchten würde, die manuelle Arbeiten verrichten. Der britische … [+8169 chars]"
    },
    {
        "source": {
            "id": "t3n",
            "name": "T3n"
        },
        "author": "Walter Sinn",
        "title": "Tesla reagiert klammheimlich auf Chipmangel, liefert Autos ohne autonome Fahroption aus",
        "description": "Das Kraftfahrt-Bundesamt will von Tesla wissen, warum in Deutschland 13.500 Model Y und Model 3 ohne das für autonome Fahrfunktionen erforderliche Steuergerät ausgeliefert wurden. Der Grund dürfte in der Chipknappheit liegen.\nDem Spiegel liegen Dokumente vor,…",
        "url": "https://t3n.de/consent?redirecturl=%2Fnews%2Ftesla-verbaut-weniger-chips-1453167%2F%3Futm_source%3Drss%26utm_medium%3Dfeed%26utm_campaign%3Dnews",
        "urlToImage": "https://storage.googleapis.com/t3n-de/assets/t3n/2018/images/t3n-og-1200x630.png",
        "publishedAt": "2022-02-19T10:15:49Z",
        "content": "Wir verwenden Cookies oder ähnliche Informationen (z.B. deine IP-Adresse, Zählpixel) sowie Funktionen von Drittanbietern, die Cookies setzen. Das dient der Funktionalität auf t3n.de (z.B. sichere Dat… [+1358 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Giga"
        },
        "author": "Felix Gräber",
        "title": "ADAC: Warum bei E-Autos die Zahl der Pannen durch die Decke geht",
        "description": "Die Pannenhelfer des ADAC rückten 2021 zu viel mehr E-Auto-Einsätzen aus als im Vorjahr, die Zahl der Einsätze ist explodiert. Ein Grund, sich vom E-Auto-Traum zu verabschieden, ist das aber nicht. E-Auto-Fahrer sollten bei einer Komponente ganz genau hinsehe…",
        "url": "https://www.giga.de/news/adac-warum-bei-e-autos-die-zahl-der-pannen-durch-die-decke-geht/",
        "urlToImage": "https://crops.giga.de/c0/bd/1b/11e97e205c3890bf63afd99bac_YyA3MTIxeDM3MjArMjI3KzY2NgJyZSAxMjAwIDYyNwNjZDE5MmM5ZmE5YQ==.jpg",
        "publishedAt": "2022-02-19T10:15:14Z",
        "content": "Die Pannenhelfer des ADAC rückten 2021 zu viel mehr E-Auto-Einsätzen aus als im Vorjahr, die Zahl der Einsätze ist explodiert. Ein Grund, sich vom E-Auto-Traum zu verabschieden, ist das aber nicht. E… [+2149 chars]"
    }
];
const bubble_SortInAsc = (a) => {
    var swap;
    var n = a.length - 1;
    var x = a;
    do {
        swap = false;
        for (var i = 0; i < n; i++) {
            if (x[i].publishedAt < x[i + 1].publishedAt) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}
const bubble_SortInDesc = (a) => {
    var swap;
    var n = a.length - 1;
    var x = a;
    do {
        swap = false;
        for (var i = 0; i < n; i++) {
            if (x[i].publishedAt > x[i + 1].publishedAt) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}
router.get('/', async(req, res) => {
    return res.status(201).send({ "articles": articles })
});

router.get('/sortasc', async(req, res) => {
    return res.status(201).send({ "articles": bubble_SortInAsc(articles) })
});

router.get('/sortdesc', async(req, res) => {
    return res.status(201).send({ "articles": bubble_SortInDesc(articles) })
});


router.get('/filter', async(req, res) => {
    console.log(req.body)
    if (req.body.author) {
        return res.status(201).send({
            "articles": articles.filter(article => article.author === req.body.author)
        })
    }
    return res.status(201).send({ "articles": articles })
})
module.exports = router;