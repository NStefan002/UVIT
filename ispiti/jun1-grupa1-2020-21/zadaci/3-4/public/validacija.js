const form = document.querySelector('form');
if (form == null) {
    console.log('Nema formulara');
} else {
    form.addEventListener('submit', function(event) {
        const btns = document.getElementsByName('ziri');
        const selected = false;
        for (const b of btns) {
            if (b.checked) {
                selected = true;
                break;
            }
        }

        if (selected == false) {
            window.alert('Niste izabrali tip ocene');
            event.preventDefault();
            return;
        }
    })
}
