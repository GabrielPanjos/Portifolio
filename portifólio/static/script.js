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

let sobrePereira = false
let linguagensEFerramentas = false



function mostrarInfo(infoId) {

  document.getElementById(infoId)
  if (infoId === 'sobre-pereira' && sobrePereira === false) {
    document.getElementById('conteudo-apresentacao').style.display = "block"
    document.getElementById('conteudo-linguagens-e-ferramentas').style.display = "none"
    sobrePereira = true

  } else if (infoId === 'linguagens-e-ferramentas' && linguagensEFerramentas === false) {
    document.getElementById('conteudo-apresentacao').style.display = "none"
    document.getElementById('conteudo-linguagens-e-ferramentas').style.display = "block"
    linguagensEFerramentas = true

  } else if (infoId === 'sobre-pereira' && sobrePereira === true) {
    document.getElementById('conteudo-apresentacao').style.display = "none"
    sobrePereira = false

  } else if (infoId === 'linguagens-e-ferramentas' && linguagensEFerramentas === true) {
    document.getElementById('conteudo-linguagens-e-ferramentas').style.display = "none"
    linguagensEFerramentas = false

  }

}

document.getElementById("sobre-pereira").addEventListener("click", () => {
  mostrarInfo("sobre-pereira")
})

document.getElementById("linguagens-e-ferramentas").addEventListener("click", () => {
  mostrarInfo("linguagens-e-ferramentas")
})