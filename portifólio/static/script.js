const infoLinks = document.querySelectorAll('.info');

infoLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        link.classList.remove('clicked');
        void link.offsetWidth; // reinicia a transição
        link.classList.add('clicked');
    });
});