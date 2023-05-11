const dogadjaji = [
    { naziv: "JavaScript conference 2021", datum: new Date(2021, 5, 14), prijavljen: false },
    { naziv: "A state of modern web", datum: new Date(2021, 5, 2), prijavljen: false },
    { naziv: "Node Congress", datum: new Date(2021, 3, 14), prijavljen: true },
    { naziv: "HTML + CSS conference", datum: new Date(2021, 7, 6), prijavljen: false },
    { naziv: "RxJS topics", datum: new Date(2021, 8, 24), prijavljen: false },
    { naziv: "TypeScript talks", datum: new Date(2021, 9, 20), prijavljen: true },
    { naziv: "Angular conference", datum: new Date(2021, 1, 9), prijavljen: false },
];

const svetlozelena = 'rgba(128, 255, 0, 0.5)';
const svetlocrvena = 'rgba(220, 20, 60, 0.5)';

function main() {
    const bodies = document.getElementsByTagName('body');
    if (bodies.length == 0) {
        console.error('nedostaje body');
        return;
    }

    const body = bodies[0];
    const h1 = document.createElement('h1');
    h1.textContent = 'Prijavite se na dogadjaje';

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';

    for (const d of dogadjaji) {
        const tekst = d.naziv + ', datum: ' + d.datum.toLocaleDateString();
        const li = document.createElement('li');
        li.textContent = tekst;
        li.style.backgroundColor = d.prijavljen ? svetlozelena : svetlocrvena;

        li.addEventListener('click', function () {
            d.prijavljen = !d.prijavljen;
            li.style.backgroundColor = d.prijavljen ? svetlozelena : svetlocrvena;
        })

        ul.appendChild(li);
    }

    body.appendChild(h1);
    body.appendChild(ul);
}

main();
