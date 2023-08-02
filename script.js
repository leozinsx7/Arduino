function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (username === 'leonardo' && password === '1234') {
    // Redirecionar para a página do website em caso de login bem-sucedido
    window.location.href = 'website.html';
  } else {
    errorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
    errorMessage.style.color = 'red';
  }
}
