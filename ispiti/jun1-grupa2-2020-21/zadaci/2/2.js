const temperature = [
    { grad: "Beograd", temperatura: 21 },
    { grad: "Novi Sad", temperatura: 18 },
    { grad: "Subotica", temperatura: 17 },
    { grad: "Nis", temperatura: 25 },
];

const omotac = document.getElementById("omotac");
console.log(omotac);
let i = 0;
for (const t of temperature) {
    dodajStubac(omotac, t.grad, t.temperatura, i);
    i++;
}

function dodajStubac(omotac, grad, temperatura, i) {
    const stubac = document.createElement('div');
    stubac.style.width = '50px';
    stubac.style.height = (temperatura * 10) + 'px'
    stubac.style.backgroundColor = odrediBoju(temperatura);
    stubac.style.position = 'absolute';
    stubac.style.bottom = '50px'; // da bi oslobodili mesto za naslov
    stubac.style.left = (i * 90) + 'px';
    stubac.style.margin = '40px';

    stubac.addEventListener('click', function() {
        const promena = Math.floor((Math.random() * 5)) - 2;
        console.log(i);

        temperature[i].temperatura += promena;
        stubac.style.height = (temperature[i].temperatura * 10) + 'px'
        stubac.style.backgroundColor = odrediBoju(temperature[i].temperatura);
    })

    const naslov = document.createElement('p');
    naslov.style.width = stubac.style.width;
    naslov.style.position = stubac.style.position;
    naslov.style.bottom = '0';
    naslov.style.left = stubac.style.left;
    naslov.style.margin = stubac.style.margin;
    naslov.style.textAlign = 'center';
    naslov.textContent = grad;

    omotac.appendChild(stubac);
    omotac.appendChild(naslov);
}

function odrediBoju(temperatura) {
    let boja;
    if (temperatura >= 0 && temperatura < 10) {
        boja = 'lightblue';
    } else if (temperatura >= 10 && temperatura < 20) {
        boja = 'yellow';
    } else if (temperatura >= 20 && temperatura < 30) {
        boja = 'orange';
    } else if (temperatura >= 30) {
        boja = 'red';
    }

    return boja;
}
