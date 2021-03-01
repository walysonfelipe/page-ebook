const temaToggle = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  
  const temaAtual = localStorage.getItem("tema");

  if (temaAtual) {
    
    document.documentElement.setAttribute("data-tema", temaAtual);

    if (temaAtual === "dark") {
      temaToggle.checked = true;
    }
  }
  
 
  function switchTema(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-tema", "dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.documentElement.setAttribute("data-tema", "light");
      localStorage.setItem("tema", "light");
    }
  }
  
  temaToggle.addEventListener("change", switchTema, false);



  // ENVIAR EMAIL



  function enviarEmail(){
  let nome = document.getElementById('nome').value;    
  let email = document.getElementById('email').value;  
    fetch('http://localhost:8080/api/enviar-email?nome=' + nome + '&email=' + email, { 
      method: 'get' // opcional 
    })
    .then(function(response) { 
      // use a resposta 
    })
    .catch(function(err) { console.error(err); });
  }
  