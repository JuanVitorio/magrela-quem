
function expli() {
  alert('O programador não conseguiu formatar o nome porque tava meio bugado ')
}

function removerEspecial(texto) {
  texto = texto.replace(/[ÀÁÂÃÄÅ]/, "A");
  texto = texto.replace(/[àáâãäå]/, "a");
  texto = texto.replace(/[ÈÉÊË]/, "E");
  texto = texto.replace(/[Ç]/, "C");
  texto = texto.replace(/[ç]/, "c");
  return texto.replace(/[^a-z0-9]/gi, '');
}

function verificar() {
  let nome = document.querySelector('#nome').value
  let img = document.querySelector('#img')

  if (nome == '') {
    alert('Digite um nome lapa')
  } else {
    removerEspecial(nome)
    console.log(nome)
    let nome_real = nome.trim()
    let arr = nome_real.split(' ')

    if (arr[0] == 'juan') {
      img.src = 'img/eu.png'
    } else if (arr[0] == 'kaua' || arr[1] == 'silvestre') {
      img.src = 'img/kaua.png'
    } else if (arr[0] == 'artur' || nome_real == 'turzin') {
      img.src = 'img/artur.png'
    } else if (arr[0] == 'edson' || nome_real == 'dede') {
      img.src = 'img/edson.png'
    } else if (arr[0] == 'misac' || nome_real == 'gordo') {
      img.src = 'img/misac.png'
    } else if (arr[0] == 'nicolau') {
      img.src = 'img/nicolau.png'
    } else if (arr[0] == 'ruslan' || nome_real == 'lanlan') {
      img.src = 'img/ruslan.png'
    } else if (arr[0] == 'rhuan' || nome_real == 'juarez') {
      img.src = 'img/rhuan.png'
    } else {
      alert('Você digitou isso direito?')
    }
  }




}