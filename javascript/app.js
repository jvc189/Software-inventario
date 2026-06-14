function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function deleteRow(btn) {
  var row = btn.closest('tr');
  if (row && confirm('Deseja excluir este registro?')) {
    row.remove();
  }
}

function filterTable(tbodyId, term) {
  var rows = document.getElementById(tbodyId).querySelectorAll('tr');
  rows.forEach(function (row) {
    row.style.display = row.textContent.toLowerCase().includes(term.toLowerCase()) ? '' : 'none';
  });
}

function makeActionBtns() {
  return '<div class="actions">' +
    '<button class="action-btn" title="Visualizar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>' +
    '<button class="action-btn" title="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>' +
    '<button class="action-btn delete" title="Excluir" onclick="deleteRow(this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg></button>' +
    '</div>';
}

function makeDeleteBtn() {
  return '<div class="actions">' +
    '<button class="action-btn" title="Visualizar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>' +
    '<button class="action-btn delete" title="Excluir" onclick="deleteRow(this)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg></button>' +
    '</div>';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });
});
