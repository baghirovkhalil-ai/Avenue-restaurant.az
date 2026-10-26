/* Avenue Restoran — menyu məlumatları. Qiymətlər AZN ilə.
   Format: [ad, qiymət, tərkib (istəyə görə)]
   Bar bölmələrində qiymət massiv ola bilər: sütunlar "cols" ilə verilir. */
window.AVENUE_MENU = {
  kitchen: [
    { id: "sorbalar", img: "1589187154184-995b8a4e740a", title: "Şorbalar", items: [
      ["Düşbərə", 5, "Bakı sayağı düşbərə"],
      ["Borş", 8, "Mal əti, kələm, çuğundur, kök"],
      ["Xarço", 7, "Mal əti, yumru düyü, xmeli-suneli, tkemali, qoz"],
      ["Toyuq supu", 5, "Toyuq file, yumru düyü, kartof, soğan"]
    ]},
    { id: "salatlar", img: "1546793665-c74683f339c1", title: "Salatlar", items: [
      ["Can əti salatı", 22, "Can əti, pomidor, xiyar, göyərti, soğan, acı bibər, xüsusi sous"],
      ["Krevetka avokado salatı", 20, "Krevetka, avokado, parmezan, pomidor, mix salat, xüsusi sous"],
      ["Xırt-xırtlı badımcan salatı", 9, "Badımcan, pomidor, ağ küncüt, göy soğan, xüsusi sous"],
      ["Albalı pomidor salatı", 9, "Pomidor, albalı, qırmızı soğan, albalılı sous"],
      ["Sezar toyuq", 15, "Aysberq, toyuq filesi, sezar sous, çeri pomidor, parmezan"],
      ["Sezar krevetka", 18, "Aysberq, okean krevetkası, sezar sousu, çeri pomidor, parmezan"],
      ["Sveji salat", 6, "Pomidor, xiyar, qırmızı soğan"],
      ["Çoban salatı pendirli", 8, "Pomidor, xiyar, göyərtilər, ağ pendir, qırmızı soğan"]
    ]},
    { id: "qelyanaltilar", img: "1589881133595-a3c085cb731d", title: "Qəlyanaltılar", items: [
      ["Haydari", 6, "Süzmə, xama, nanə, kərə yağı, göyərti"],
      ["Zeytun assorti", 8, "Yaşıl və qara zeytun"],
      ["Ağ pendir", 5],
      ["Motal pendir", 7],
      ["Pendir assorti", 18, "Motal, ağ pendir, dilim pendir, saçaq pendir, mozarella, parmezan, bal"],
      ["Turşu assorti", 8, "Xiyar, pomidor, sarımsaq, badımcan, ağ kələm, qırmızı kələm"],
      ["Siyənək balığı kartof soyutması ilə", 14, "Siyənək balığı, kartof soyutması, şüyüd, kərə yağı"],
      ["SSRİ sayağı kələm", 6, "Molokan kələmi, xiyar turşusu, qırmızı soğan, zeytun yağı"],
      ["Tərəvəz buketi", 7, "Pomidor, xiyar, göyərti çeşidləri"],
      ["Üçlü turşu", 12, "Sparja, kök, albalı"],
      ["Acılı əzmə", 6, "Bibər, pomidor, zeytun yağı, sarımsaq, soğan, göyərti"]
    ]},
    { id: "toyuq", img: "1606728035253-49e8a23146de", title: "Toyuq yeməkləri", note: "“Qarnir seçimi” olan yeməklərə qarniri özünüz seçirsiniz.", items: [
      ["Tabaka çolpa", 22, "Kənd çolpası, kərə yağı, ev sayağı kartof"],
      ["Toyuq langet", 14, "Toyuq filesi, kərə yağı, qarnir seçimi"],
      ["Çolpa çığırtması", 22, "Kənd çolpası, kərə yağı, pomidor, soğan, yumurta"],
      ["Kiyev sayağı kotlet", 18, "Toyuq filesi, kərə yağı, şüyüd, qurudulmuş çörək, qarnir seçimi"],
      ["Kefli beçə", 22, "Kənd çolpası, ağ çaxır, üzüm"],
      ["Toyuq faxitos", 18, "Toyuq filesi, rəngli bibər, kərə yağı, xüsusi sous, lavaş"],
      ["Chicken stroganoff", 16, "Toyuq filesi, soğan, göbələk, turşu xiyar, qaymaq, qarnir seçimi"],
      ["Toyuq izqara", 15, "Toyuq budu, xüsusi sous, pomidor, bibər, qarnir seçimi"],
      ["Toyuq pesto-rosso sousunda", 15, "Toyuq filesi, pesto-rosso sous, qaymaq, çeri pomidor, sarımsaq, qarnir seçimi"],
      ["Albalı çolpa", 22, "Çolpa, albalı, şabalıd, soğan, xüsusi sous"],
      ["Tornado toyuq", 16, "Toyuq filesi, bibər, soğan, acı bibər, göbələk, sarımsaq, xüsusi sous, qarnir seçimi"],
      ["Xardallı toyuq", 16, "Toyuq filesi, xardal, qaymaq, ədviyyatlar"],
      ["Toyuq çöp şiş", 15, "Toyuq filesi, bibər, soğan, qarnir seçimi"]
    ]},
    { id: "et", img: "1600891964092-4316c288032e", title: "Ət yeməkləri", items: [
      ["Quzu antrekot cızdağ", 20, "Quzu antrekot, quzu quyruq, pomidor, acı bibər"],
      ["Can əti nar qovurma", 20, "Can əti, soğan, nar, şabalıd, nar sousu"],
      ["Quzu nar qovurma", 20, "Quzu əti, quyruq, soğan, şabalıd, nar"],
      ["Şirəli dana", 17, "Dana əti, soğan, kərə yağı"],
      ["Ət langet", 18, "Can əti, pomidor, acı bibər, qarnir seçimi"],
      ["Meksikan sayağı can əti", 20, "Can əti, rəngli bibər, qırmızı soğan, çeri pomidor, lobya, qarğıdalı, xüsusi sous"],
      ["İspanaqlı can əti paşot yumurta ilə", 20, "Can əti, ispanaq, soğan, paşot yumurta"],
      ["Albalılı can əti", 20, "Can əti, albalı, şabalıd, soğan"],
      ["Tərxunlu can əti", 19, "Can əti, soğan, tərxun"],
      ["Ev sayağı tuşonka", 18, "Mal əti, ədviyyat, dəfnə yarpağı"],
      ["Qaymaqlı can əti", 18, "Can əti, göbələk, qaymaq"],
      ["Beefstroganov", 20, "Can əti, soğan, göbələk, turşu xiyar"],
      ["Can əti lokum", 25, "Can əti, pomidor, acı bibər"],
      ["Quzu jarkoye", 19, "Quzu əti, kartof, soğan"],
      ["Qara tava", 25, "Can əti, uzun düyü, göbələk, soğan, ağ çaxır, cəfəri, pomidor"]
    ]},
    { id: "saclar", img: "1608877906601-33195b1dc2cb", title: "Saclar", items: [
      ["Quzu əti sacı", 34, "Quzu əti, quyruq, soğan, göbələk, kartof, badımcan, pomidor, bibər"],
      ["Can əti sacı", 38, "Can əti, soğan, göbələk, kartof, badımcan, bibər, pomidor"],
      ["Toyuq sacı", 30, "Kənd çolpası, soğan, göbələk, kartof, pomidor, badımcan, bibər"]
    ]},
    { id: "deniz", img: "1519708227418-c8fd9a32b7a2", title: "Dəniz məhsulları", items: [
      ["Losos steak", 22, "Forel balığı, yağ, limon, narşərab"],
      ["Losos rosso sousunda", 25, "Forel balığı, rosso sousu, qaymaq, yağ, limon"],
      ["Sudak (tavada)", 22, "Sudak balığı, soğan, nar dənəsi, narşərab, nar məti"],
      ["Dorado (tavada)", 25, "Dorado balığı, soğan, nar dənəsi, narşərab, nar məti"],
      ["Krevetka çay / dəniz", 14, "Dəniz və ya çay krevetkası, limon"],
      ["Krevetka kərə yağında", 18, "Okean krevetkası, kərə yağı, çeri pomidor, sarımsaq"],
      ["Qaymaqlı krevetka", 20, "Krevetka, qaymaq, limon, yağ"],
      ["Dorado (hisə verilmiş)", 20, "Hisə verilmiş dorado balığı, limon"],
      ["Hisə verilmiş forel", 12, "Hisə verilmiş forel balığı, limon"]
    ]},
    { id: "mezeler", img: "1567620832903-9fc6debc209f", title: "Məzələr", items: [
      ["Noxud", 4], ["Saçaq pendir", 5], ["Qızardılmış pətənək marinadlı", 6],
      ["Qızardılmış saçaq pendir", 5], ["Ağ / qara tum qovurulmuş", 7], ["Qızardılmış düşbərə", 6],
      ["Edamame", 8], ["Naços", 18], ["Gürzə qızartma", 8], ["Gürcü xəngəli qızartma (4 əd.)", 6],
      ["Qızardılmış boğaz marinadlı", 5], ["Toyuq popkorn", 7], ["Toyuq Jersy", 9],
      ["Toyuq qanadları müxtəlif souslarda", 8], ["Corat qutabı mini", 7], ["Göbələk çips", 7],
      ["Noxud qızardılmış", 6], ["Fimi", 8], ["Çipsi Lays / Doritos", 6], ["Hisə verilmiş boğaz (ədəd)", 1.5],
      ["Hisə verilmiş bildirçin", 6], ["Hisə verilmiş bildirçin extra", 9], ["Püstə Antep", 12],
      ["Pendirli qrenki", 8], ["Basdırma ət (Jerky)", 6], ["Pendir topları", 8],
      ["Forel hisə verilmiş", 12], ["Dorado hisə verilmiş", 20], ["Krevetka çay / dəniz", 14]
    ]},
    { id: "qarnirler", img: "1518013431117-eb1465fa5752", title: "Qarnirlər", items: [
      ["Püre", 4], ["Düyü", 4], ["Kartof fri", 4], ["Ev sayağı kartof qızartması", 4],
      ["Kartof soyutması", 4], ["Rizotto by Avenue", 6], ["Qovrulmuş düyü", 6]
    ]},
    { id: "kanape", img: "1771154136172-0633db70b7dc", title: "Kanape", items: [
      ["Kanape siyənək", 14, "Qara çörək, qırmızı soğan, siyənək, kərə yağı"],
      ["Kanape şprot", 14, "Qara çörək, xüsusi sous, şprot balığı, turşu xiyar"],
      ["Kanape tuna", 14, "Qara çörək, tuna balığı, şüyüd, çeri pomidor"],
      ["Kanape quyruğ", 14, "Qara çörək, quyruğ, şüyüd, xüsusi sous"],
      ["Kanape set", 38, "Qara çörək, qırmızı soğan, tuna, şprot, siyənək, quyruğ, turşu xiyar, kartof"]
    ]},
    { id: "fastfood", img: "1568901346375-23c9450c58cd", title: "Fast food", items: [
      ["Avenue sandwich", 15, "Tost çörək, toyuq file, xiyar turşusu, xiyar, pomidor, xüsusi sous"],
      ["Dürüm toyuq", 12, "Toyuq file, pomidor, xiyar, xüsusi sous, lavaş, kartof fri, ketçup, mayonez"],
      ["Dürüm ət", 17, "Can əti, lavaş, pomidor, xiyar, xüsusi sous, kartof fri, ketçup, mayonez"],
      ["Crispy chicken burger", 14, "Toyuq file, soğan, pomidor, xiyar turşusu, xiyar, kartof fri, ketçup, mayonez"],
      ["BBQ ət burger", 17, "Mal əti, soğan, pomidor, xiyar turşusu, xiyar, kartof fri, ketçup, mayonez"],
      ["Sezar roll", 15, "Toyuq file, aysberq, pomidor, parmezan pendir, sezar sous, kartof fri"],
      ["Pendir çubuqları", 19, "Mozarella pendiri, sweet chili sous, suxari, kartof fri"],
      ["Nuggets", 10, "Toyuq file, sweet chili sous, suxari, kartof fri"],
      ["Krevet tempura", 18, "Krevetka, sweet chili sous, suxari"]
    ]},
    { id: "sosisler", img: "1552913903-2cffa1962dc7", title: "Sosislər", items: [
      ["Oxotnik", 10], ["İveria Gürcü", 10], ["Sardelka Gürcü", 10], ["Südlü sosis", 12],
      ["Manqalüstü", 10], ["Sosis seti", 35, "Sosis çeşidləri"]
    ]},
    { id: "desertler", img: "1761828122856-8703baac8e86", title: "Desertlər", items: [
      ["Meyvə assorti S / M / L", "10 / 20 / 30", "Mövsümə uyğun meyvə çeşidləri"],
      ["Dondurma", 8, "Üç top"],
      ["Türk paxlavası", 6],
      ["Quru meyvələr", 15],
      ["Çərəzlər", 15]
    ]}
  ],

  bar: [
    { id: "celle-pivesi", img: "1535958636474-b021ee887b13", title: "Çəllək pivəsi", cols: ["330 ml", "500 ml"], items: [
      ["Special sadə", [3, 3.5]], ["Special NF", [3.5, 4]], ["Xırdalan sadə", [3, 3.5]],
      ["Xırdalan NF", [3.5, 4]], ["Alivaria sadə", [5, 6]], ["Alivaria NF", [5, 6]],
      ["Lidskaya", [5, 6]], ["Jiguli Barnoe", [5, 6]], ["Carlsberg", [5, 6]],
      ["1664 Blanc", [5, 6]], ["Erdinger", [8, 9]], ["Pražačka", [8, 9]]
    ]},
    { id: "suse-piveler", img: "1546622891-02c72c1537b6", title: "Şüşə pivələr", items: [
      ["Hoegaarden", 9], ["Stella Artois", 9], ["Erdinger Zero", 9], ["Erdinger Dark", 9],
      ["Baltika Zero", 7], ["Xırdalan Zero", 6], ["Efes Zero", 6], ["Efes Draft", 7], ["Corona Extra", 9]
    ]},
    { id: "vodka", img: "1470337458703-46ad1756a187", title: "Vodka", cols: ["50 ml", "0.5 L", "0.7 L", "1 L"], items: [
      ["Absolut", [7, 55, 75, 85]], ["Finlandia", [6, 50, 70, 80]],
      ["Russkiy Standart", [null, 55, 65, null]], ["Koskenkorva", [null, 60, 70, 85]],
      ["Parlament", [null, 45, 55, null]], ["Arxangelskaya", [6, 38, 48, 62]],
      ["Kazaçkaya Rada", [5, null, null, 32]]
    ]},
    { id: "tekila", title: "Tekila", cols: ["50 ml", "0.5 L", "0.7 L", "1 L"], items: [
      ["Olmeca", [8, 79, 99, 124]], ["Patrón", [15, null, null, 235]]
    ]},
    { id: "cin", title: "Cin", cols: ["50 ml", "1 L"], items: [
      ["Gordon's", [8, 95]], ["Beefeater", [9, 120]]
    ]},
    { id: "rom", title: "Rom", cols: ["50 ml", "1 L"], items: [
      ["Bacardi Carta Blanca", [9, 114]], ["Bacardi Carta Negra", [9, 114]], ["Bacardi Carta Oro", [9, 114]]
    ]},
    { id: "konyak", title: "Konyak", cols: ["0.7 L"], items: [
      ["Azərbaycan XO", [111]], ["Rémy Martin VSOP", [222]]
    ]},
    { id: "viski", img: "1470337458703-46ad1756a187", title: "Viski", cols: ["50 ml", "0.5 L", "0.7 L", "1 L"], items: [
      ["Jameson", [8, 84, 99, 119]], ["Jack Daniel's", [9, null, 95, 129]],
      ["Chivas 12", [9, null, 99, 133]], ["Chivas 18", [16, null, null, 237]],
      ["Monkey Shoulder", [9, 89, 99, 144]]
    ]},
    { id: "sampan", title: "Şampan", cols: ["0.7 L"], items: [
      ["Abrau-Durso Brut", [40]], ["Abrau-Durso Rosé", [40]], ["Abrau-Durso Semi-dry", [40]]
    ]},
    { id: "likor", title: "Likör", cols: ["50 ml", "0.5 L", "0.7 L", "1 L"], items: [
      ["Jägermeister", [8, 76, 96, 124]], ["Malibu", [9, null, null, 124]],
      ["Baileys", [9, null, null, 134]], ["Aperol", [9, null, null, 134]],
      ["Cointreau", [9, null, null, 134]], ["Sambuca", [9, null, null, 134]]
    ]},
    { id: "vermut", title: "Vermut", cols: ["50 ml", "1 L"], items: [
      ["Martini Bianco", [8, 93]], ["Martini Rosso", [8, 93]]
    ]},
    { id: "kokteyller", img: "1514362545857-3bc16c4c7d1b", title: "Alkoqollu kokteyllər", items: [
      ["Aperol Spritz", 18], ["Long Island", 22], ["Mojito Alco", 17], ["Negroni", 17],
      ["Mai Tai", 18], ["Gin Tonic", 16], ["Long Island Energy", 25], ["Mojito Energy", 19],
      ["Cuba Libre", 14], ["Tequila Sunrise", 15], ["Margarita", 15]
    ]},
    { id: "alkoqolsuz", img: "1609951651556-5334e2706168", title: "Alkoqolsuz kokteyllər", items: [
      ["Mojito", 12], ["Mojito çiyələk", 12], ["Mojito Energy", 15], ["Sunrise", 11]
    ]},
    { id: "shots", title: "Shotlar", items: [
      ["B-52", 14], ["Hiroshima", 16], ["Meduza", 15]
    ]},
    { id: "shot-set", img: "1570598912132-0ba1dc952b7d", title: "Shot setləri", items: [
      ["Traffic Light", 24], ["Avenue Special", 25], ["Ice Cream Shot", 25], ["Mexican Shot", 25]
    ]},
    { id: "soyuq", img: "1551024709-8f23befc6f87", title: "Soyuq içkilər", items: [
      ["Coca-Cola / Fanta / Sprite 0.33", 5], ["Ev sayağı Ice Tea 350 ml", 7], ["Ev sayağı Ice Tea 1 L", 20],
      ["Meyvə suyu Sandora", 8], ["Ev sayağı limonad 350 ml", 8], ["Ev sayağı limonad 1 L", 20],
      ["Red Bull 0.33", 8], ["Qazlı / qazsız su", 5], ["Meyvə kompotu", 7],
      ["Düşes armud / tərxun", 5], ["Schweppes", 7]
    ]}
  ]
};
