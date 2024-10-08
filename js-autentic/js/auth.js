// auth.js

document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('signup-btn').addEventListener('click', signUp);
document.getElementById('logout-btn').addEventListener('click', logout);

// Função para realizar login
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Login realizado com sucesso!');
      toggleAuthState(true);
    })
    .catch((error) => {
      alert('Erro no login: ' + error.message);
    });
}

// Função para realizar cadastro
function signUp() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Cadastro realizado com sucesso!');
      const user = userCredential.user;

      // Salvar no Firestore
      db.collection('users').add({
        uid: user.uid,
        email: user.email
      });

      toggleAuthState(true);
    })
    .catch((error) => {
      alert('Erro no cadastro: ' + error.message);
    });
}

// Função para logout
function logout() {
  auth.signOut().then(() => {
    alert('Logout realizado com sucesso!');
    toggleAuthState(false);
  }).catch((error) => {
    console.error('Erro ao realizar logout: ', error);
  });
}

// Verifica se há usuário logado
auth.onAuthStateChanged((user) => {
  if (user) {
    toggleAuthState(true);
  } else {
    toggleAuthState(false);
  }
});

// Função para alternar o estado da autenticação
function toggleAuthState(isLoggedIn) {
  if (isLoggedIn) {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('signup-btn').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'block';
  } else {
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('signup-btn').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'none';
  }
}
