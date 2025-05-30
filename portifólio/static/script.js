const infoLinks = document.querySelectorAll('.info');

infoLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Se já estiver com a classe 'clicked', remova (desativa seta)
    if (link.classList.contains('clicked')) {
      link.classList.remove('clicked');
    } else {
      // Remove de todos os outros
      infoLinks.forEach(l => l.classList.remove('clicked'));

      // Reinicia a animação no link atual
      void link.offsetWidth;

      // Adiciona a seta apenas no clicado
      link.classList.add('clicked');
    }
  });
});

function mostrarInfo(infoId) {
  
}