const MOCK_ANIMAIS = [
  {nome:'Rex', especie:'Cachorro', raca:'SRD', idade:4, clienteId:1},
  {nome:'Mimi', especie:'Gato', raca:'Siamês', idade:2, clienteId:1},
  {nome:'Bidu', especie:'Cachorro', raca:'Beagle', idade:3, clienteId:2},
];

const MOCK_AG = [
  {animalId:1, servico:'BANHO', data:'2025-11-05', horario:'10:00', status:'ABERTO'},
  {animalId:2, servico:'CONSULTA', data:'2025-11-06', horario:'14:30', status:'CONFIRMADO'}
];

function renderAnimais(lista){
  const tbody = document.querySelector('#tabela-animais tbody');
  if (!tbody) return;
  tbody.innerHTML = lista.map(a =>
    `<tr><td>${a.nome}</td><td>${a.especie}</td><td>${a.raca||''}</td><td>${a.idade??''}</td><td>${a.clienteId}</td></tr>`
  ).join('');
}

function renderAgendamentos(lista){
  const tbody = document.querySelector('#tabela-agendamentos tbody');
  if (!tbody) return;
  tbody.innerHTML = lista.map(a =>
    `<tr><td>${a.animalId}</td><td>${a.servico}</td><td>${a.data}</td><td>${a.horario}</td><td>${a.status}</td></tr>`
  ).join('');
}

// Animais.html
if (location.pathname.endsWith('/animais.html')) {
  const aplicarFiltros = () => {
    const busca = document.getElementById('busca').value.trim().toLowerCase();
    const especie = document.getElementById('especie').value;
    const filtrada = MOCK_ANIMAIS.filter(a =>
      ( !busca || a.nome.toLowerCase().includes(busca) ) &&
      ( !especie || a.especie === especie )
    );
    renderAnimais(filtrada);
  };
  document.getElementById('btnBuscar')?.addEventListener('click', aplicarFiltros);
  window.addEventListener('load', aplicarFiltros);
}

// Agendamentos.html
if (location.pathname.endsWith('/agendamentos.html')) {
  document.getElementById('btnBuscarAg')?.addEventListener('click', () => {
    const data = document.getElementById('data').value;
    const lista = data ? MOCK_AG.filter(a => a.data === data) : MOCK_AG;
    renderAgendamentos(lista);
  });
}

function salvarAnimal(ev){
  ev.preventDefault();
  alert('(Mock) Animal salvo!');
  location.href = './animais.html';
  return false;
}
function salvarAgendamento(ev){
  ev.preventDefault();
  alert('(Mock) Agendamento salvo!');
  location.href = './agendamentos.html';
  return false;
}
function fazerLogin(ev){
  ev.preventDefault();
  alert('Login será implementado mais à frente.');
  return false;
}
