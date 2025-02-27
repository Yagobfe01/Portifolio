const stickyElement = document.getElementById('mySticky');


function handleScroll() {
  if (window.scrollY > 200) { // Defina aqui a posição de rolagem em que o elemento deve desaparecer
    stickyElement.classList.add('hidden'); // Adiciona a classe 'hidden' para tornar o elemento invisível
  } else {
    stickyElement.classList.remove('hidden'); // Remove a classe 'hidden' para tornar o elemento visível
  }
}
window.addEventListener('scroll', handleScroll)



//tde a partir daqui

function enviar() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let comentario = document.getElementById("comentario").value;
  let telefone = document.getElementById("telefone").value;

  if (nome.indexOf(" ") === -1) {
    alert("O nome deve possuir ao menos duas palavras.");
    return;
  }

  let indexArroba = email.indexOf("@");
  let indexPonto = email.indexOf(".");
  if (indexArroba === -1 || indexPonto === -1 || indexPonto < indexArroba + 2) {
    alert("O e-mail deve conter um '@' e um '.' válidos, com pelo menos um caractere entre eles.");
    return;
  }

  if (comentario.length < 10 || comentario.length > 500) {
    alert("A mensagem deve ter entre 10 e 500 caracteres.");
    return;
  }
  
  if (!/^\d{9}$/.test(telefone) || telefone[0] !== '9') {
    alert("O telefone deve ter 9 dígitos e começar com o número 9.");
    return;
  }

  let categoriaSelecionada = document.querySelector('input[name="categoria"]:checked');
  if (!categoriaSelecionada) {
    alert("Selecione uma área de atuação.");
    return;
  }

  alert("Formulário enviado com sucesso!");
  document.getElementById("meuFormulario").reset();
  let radios = document.querySelectorAll('input[name="categoria"]');
  radios.forEach(radio => radio.checked = false);
}


// accordions

var accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(function(accordion) {
  accordion.addEventListener('click', function() {
    var parent = accordion.parentElement;
    var isActive = parent.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(function(item) {
      item.classList.remove('active');
    });
    if (!isActive) {
      parent.classList.add('active');
    }
  });
});

function toggleDropdown() {
  var select = document.querySelector('.custom-select');
    var items = select.querySelector('.select-items');
    var selected = select.querySelector('.select-selected');
  
  items.classList.toggle('show');

  selected.classList.toggle('open');
}

function selectOption(optionText, value) {
    var selected = document.querySelector('.select-selected');
  selected.innerHTML = optionText;
  window.location.href = value;
}

