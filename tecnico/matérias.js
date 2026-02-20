function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablink")[0].className += " active";

// Botão Voltar
function comeBack() {
  location.href = '../index.html';
}

/* Insere um botão de minimizar ao lado de cada h1.projetos
   e alterna a visibilidade apenas dos botões (.tablink) daquela seção.
   Estado é salvo em localStorage como 'tabCollapsed_<index>'. */
(function() {
  var containers = document.querySelectorAll('.tab-container');
  containers.forEach(function(container, idx) {
    var h1 = container.querySelector('h1.projetos');
    
    if (!h1) return;

    // torce para o título ficar inline para o botão ficar rente
    h1.style.display = h1.style.display || 'inline-block';

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'minimize-btn';
    btn.setAttribute('aria-pressed', 'false');
    btn.title = 'Minimizar/Mostrar botões desta seção';
    btn.textContent = 'Mostrar mais';

    // inserir logo após o h1
    if (h1.nextSibling) h1.parentNode.insertBefore(btn, h1.nextSibling);
    else h1.parentNode.appendChild(btn);

    // Start collapsed by default
    container.classList.add('collapsed');

    btn.addEventListener('click', function() {
      var nowCollapsed = container.classList.toggle('collapsed');
      btn.textContent = nowCollapsed ? 'Mostrar mais' : 'Mostrar menos';
      btn.setAttribute('aria-pressed', nowCollapsed ? 'false' : 'true');
    });
    
  });
})();