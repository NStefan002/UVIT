const casovi = [
    {
        predmet: "Uvod u organizaciju i arhitekturu racunara 2",
        tip: "predavanje",
        dan: "Ponedeljak",
        vreme: 8,
        brojCasova: 3
    },
    {
        predmet: "Uvod u organizaciju i arhitekturu racunara 2",
        tip: "vezbe",
        dan: "Sreda",
        vreme: 8,
        brojCasova: 2
    },
    {
        predmet: "Diskretne strukture 2",
        tip: "predavanje",
        dan: "Ponedeljak",
        vreme: 11,
        brojCasova: 3
    },
    {
        predmet: "Diskretne strukture 2",
        tip: "vezbe",
        dan: "Utorak",
        vreme: 8,
        brojCasova: 2
    },
    {
        predmet: "Programiranje 2",
        tip: "predavanje",
        dan: "Utorak",
        vreme: 12,
        brojCasova: 3
    },
    {
        predmet: "Programiranje 2",
        tip: "vezbe",
        dan: "Utorak",
        vreme: 8,
        brojCasova: 3
    },
    {
        predmet: "Uvod u organizaciju i arhitekturu racunara 2",
        tip: "vezbe",
        dan: "Utorak",
        vreme: 8,
        brojCasova: 2
    },
    {
        predmet: "Diskretne strukture 2",
        tip: "vezbe",
        dan: "Utorak",
        vreme: 10,
        brojCasova: 2
    },
    {
        predmet: "Programiranje 2",
        tip: "vezbe",
        dan: "Petak",
        vreme: 12,
        brojCasova: 3
    },
    {
        predmet: "Linearna algebra",
        tip: "predavanje",
        dan: "Utorak",
        vreme: 12,
        brojCasova: 3
    },
    {
        predmet: "Linearna algebra",
        tip: "vezbe",
        dan: "Ponedeljak",
        vreme: 8,
        brojCasova: 3
    },
    {
        predmet: "Geometrija 1",
        tip: "predavanje",
        dan: "Ponedeljak",
        vreme: 11,
        brojCasova: 2
    },
    {
        predmet: "Geometrija 1",
        tip: "vezbe",
        dan: "Sreda",
        vreme: 8,
        brojCasova: 2
    },
    {
        predmet: "Analiza 1",
        tip: "vezbe",
        dan: "Petak",
        vreme: 11,
        brojCasova: 2
    },
    {
        predmet: "Analiza 1",
        tip: "vezbe",
        dan: "Sreda",
        vreme: 8,
        brojCasova: 2
    },
    {
        predmet: "Analiza 1",
        tip: "predavanje",
        dan: "Ponedeljak",
        vreme: 13,
        brojCasova: 2
    },
    {
        predmet: "Analiza 1",
        tip: "predavanje",
        dan: "Utorak",
        vreme: 10,
        brojCasova: 2
    },
    {
        "grupa": "1o2a",
        predmet: "Geometrija 1",
        tip: "vezbe",
        dan: "Petak",
        vreme: 13,
        brojCasova: 1
    },
    {
        predmet: "Analiza 1",
        tip: "vezbe",
        dan: "Utorak",
        vreme: 9,
        brojCasova: 1
    }
];


const prikazi = document.getElementById('prikazi');
prikazi.addEventListener('click', function() {
    const select = document.getElementById('opcije');
    const izabranaOpcija = select.options[select.selectedIndex].value;

    const ul = document.getElementById('casovi');
    for (let i = ul.children.length - 1; i >= 0; i--) {
        ul.removeChild(ul.children[i]);
    }
    for (const cas of casovi) {
        if (izabranaOpcija == cas.dan) {
            const li = document.createElement('li');
            li.textContent = cas.tip + ': ' + cas.vreme + '-' + (cas.vreme + cas.brojCasova) + 'h, ' + cas.predmet;
            if (cas.tip == 'predavanje') {
                li.style.color = 'cornflowerblue';
            } else {
                li.style.color = 'salmon';
            }
            ul.appendChild(li);
        }
    }
})
