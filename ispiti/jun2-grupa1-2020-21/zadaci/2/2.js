function toString() {
    return `${this.imePrezime} ima prosecnu ocenu ${this.prosek} na smeru ${this.smer}`;
}

const studenti = [
    {
        id: 1,
        imePrezime: "Pera Peric",
        prosek: 10.0,
        smer: "I",
        upisan: true,
        toString,
    },
    {
        id: 2,
        imePrezime: "Laza Lazic",
        prosek: 9.21,
        smer: "M",
        upisan: false,
        toString,
    },
    {
        id: 3,
        imePrezime: "Pera Peric",
        prosek: 8.17,
        smer: "M",
        upisan: true,
        toString,
    },
    {
        id: 4,
        imePrezime: "Pera Peric",
        prosek: 9.5,
        smer: "A",
        upisan: true,
        toString,
    },
    {
        id: 5,
        imePrezime: "Pera Peric",
        prosek: 7.0,
        smer: "I",
        upisan: true,
        toString,
    },
    {
        id: 6,
        imePrezime: "Pera Peric",
        prosek: 8.04,
        smer: "I",
        upisan: false,
        toString,
    },
];

const form = document.getElementById('studenti');

for (const s of studenti) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = s.id;
    checkbox.name = s.imePrezime;
    checkbox.value = 'student';
    checkbox.checked = s.upisan;

    const label = document.createElement('label');
    label.for = s.id;
    label.textContent = s.toString();

    if (!s.upisan) {
        label.style.textDecoration = "line-through";
    }

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            s.upisan = true;
            label.style.textDecoration = 'none';
        } else {
            s.upisan = false;
            label.style.textDecoration = "line-through";
        }
    })

    form.appendChild(checkbox);
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
}
