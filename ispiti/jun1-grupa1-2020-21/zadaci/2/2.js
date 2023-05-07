const takmicari = [
    { naziv: "ZITTI E BUONI", izvodjac: "Måneskin", zemlja: "Italija", poeni: 0 },
    { naziv: "SHUM", izvodjac: "Go_A", zemlja: "Ukrajina", poeni: 0 },
    { naziv: "Dark Side", izvodjac: "Blind Channel", zemlja: "Finska", poeni: 0 },
    { naziv: "Je me casse", izvodjac: "Destiny", zemlja: "Malta", poeni: 0 },
    { naziv: "Last Dance", izvodjac: "Stefania", zemlja: "Grčka", poeni: 0 },
    { naziv: "Sugar", izvodjac: "Natalia Gordienko", zemlja: "Moldavija", poeni: 0 },
    { naziv: "Loco", izvodjac: "Hurricane", zemlja: "Srbija", poeni: 0 },
    { naziv: "El Diablo", izvodjac: "Elena Tsagrinou", zemlja: "Kipar", poeni: 0 },
    { naziv: "Mata Hari", izvodjac: "Efendi", zemlja: "Azerbejdžan", poeni: 0 },
    { naziv: "Adrenalina", izvodjac: "Senhit", zemlja: "San Marino", poeni: 0 },
    { naziv: "Tick-Tock", izvodjac: "Albina", zemlja: "Hrvatska", poeni: 0 },
    { naziv: "The Wrong Place", izvodjac: "Hooverphonic", zemlja: "Belgija", poeni: 0 },
];


const ul = document.getElementById('lista');
for (const t of takmicari) {
    const li = document.createElement('li');
    li.textContent = '[' + t.zemlja + '] ' + t.izvodjac + ' - ' + t.naziv + ': ' + t.poeni;

    li.addEventListener('click', function() {
        t.poeni++;
        li.textContent = '[' + t.zemlja + '] ' + t.izvodjac + ' - ' + t.naziv + ': ' + t.poeni;
    });

    ul.appendChild(li);
}
