const hamMenu = document.querySelector('.menu-burger');
const offScreenMenu = document.querySelector('.off-screen-nav');
const closeButton = document.querySelector('.close-button')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active'); 
});

if (closeButton) {
    closeButton.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    });
}


// Wait for the page to load completely
window.addEventListener('load', () => {
    // Add the 'loaded' class once the page is ready
    document.body.classList.add('loaded');
});
