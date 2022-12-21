var modal = document.querySelector('.js-modal');

// show/hide modal

// Function show modal login form (add class open on modal) 
const showLoginForm = () => {
    modal.classList.add("open");
}

// Function hide modal login form (remove class open on modal)
const hideLoginForm = () => {
    modal.classList.remove("open");
}

// Event hide modal dựa vào event lister hành vi click modal overlay
modal.addEventListener('click', hideLoginForm);