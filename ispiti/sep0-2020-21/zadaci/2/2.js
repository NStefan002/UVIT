const rezultati = [
    {
        sport: 'Kosarka',
        zlato: 'SAD',
        srebro: 'Francuska',
        bronza: 'Australija'
    },
    {
        zlato: 'SAD',
        srebro: 'Brazil',
        bronza: 'Srbija'
    },
    {
        sport: 'Vaterpolo',
        zlato: 'Srbija',
        srebro: 'Grcka',
        bronza: 'Madjarska'
    },
    {
        sport: 'Karate',
        zlato: 'Srbija',
        srebro: 'Kina',
        bronza: 'Turska'
    },
    {
        sport: 'Tekvondo -49',
        zlato: 'Tajland',
        srebro: 'Spanija',
        bronza: 'Srbija'
    },
    {
        sport: 'Tekvondo +67',
        zlato: 'Srbija',
        srebro: 'Juzna koreja',
        bronza: 'Velika britanija'
    },
    {
        sport: 'Rvanje',
        zlato: 'Ukrajna',
        srebro: 'Madjarska',
        bronza: 'Srbija'
    },
    {
        sport: 'Streljastvo 10',
        zlato: 'Iran',
        srebro: 'Srbija',
        bronza: 'Kina'
    },
    {
        sport: 'Streljastvo 50',
        zlato: 'Kina',
        srebro: 'Rusija',
        bronza: 'Srbija'
    },
    {
        sport: 'Basket',
        zlato: 'Letonija',
        srebro: 'Rusija',
        bronza: 'Srbija'
    }
];

const prikazi = function(z, s, b) {
    const body = document.getElementsByTagName('body')[0];

    const zlato = document.createElement('div');
    const srebro = document.createElement('div');
    const bronza = document.createElement('div');

    const sirina = '250px';

    zlato.style.position = 'absolute';
    zlato.style.bottom = '200px';
    zlato.style.right = '500px';
    zlato.style.display = 'inline-block';
    zlato.style.width = sirina;
    zlato.style.height = '200px';
    zlato.style.backgroundColor = 'gold';

    const h1 = document.createElement('h1');
    h1.textContent = z;
    h1.style.textAlign = 'center';
    zlato.appendChild(h1);

    srebro.style.position = 'absolute';
    srebro.style.bottom = '200px';
    srebro.style.right = '250px';
    srebro.style.display = 'inline-block';
    srebro.style.width = sirina;
    srebro.style.height = '130px';
    srebro.style.backgroundColor = 'silver';

    const h2 = document.createElement('h1');
    h2.textContent = s;
    h2.style.textAlign = 'center';
    srebro.appendChild(h2);

    bronza.style.position = 'absolute';
    bronza.style.bottom = '200px';
    bronza.style.right = '750px';
    bronza.style.display = 'inline-block';
    bronza.style.width = sirina;
    bronza.style.height = '70px';
    bronza.style.backgroundColor = 'brown'

    const h3 = document.createElement('h1');
    h3.textContent = b;
    h3.style.textAlign = 'center';
    bronza.appendChild(h3);

    body.appendChild(srebro);
    body.appendChild(zlato);
    body.appendChild(bronza);
};

const dugme = document.getElementById('prikazi');
dugme.addEventListener('click', function() {
    const tekst = document.getElementById('sport').value;
    if (tekst.length == 0) {
        window.alert('Nije unet sport');
        return;
    }

    for (const r of rezultati) {
        if (r.sport == tekst) {
            prikazi(r.zlato, r.srebro, r.bronza);
            return;
        }
    }

    window.alert('Nema rezultata za uneti sport');
})
