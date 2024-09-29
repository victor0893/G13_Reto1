// Puedes añadir cualquier funcionalidad interactiva aquí.
// Por ejemplo, un evento que muestre un mensaje al hacer clic en una habilidad.
document.querySelectorAll('.list-inline-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Has seleccionado la habilidad: ${item.textContent}`);
    });
});