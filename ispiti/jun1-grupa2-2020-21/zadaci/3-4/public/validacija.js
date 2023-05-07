const form = document.querySelector('form');
if (null == form) {
    console.error('Nema formulara');
} else {
    form.addEventListener('submit', function(event) {
        const btns = document.getElementsByName('dugme');
        if (!btns[0].checked && !btns[1].checked) {
            window.alert('Nije izabrana nijedna opcija.');
            event.preventDefault();
            return;
        }
    });
}
