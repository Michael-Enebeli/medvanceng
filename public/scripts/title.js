
function updateTitle() {
    const path = window.location.pathname;
    let pageTitle = '';

    switch (path) {
        case '/':
            pageTitle = 'Medvance | Home';
            break;
        case '/about':
            pageTitle = 'Medvance | About';
            break;
        case '/pharmacy':
            pageTitle = 'Medvance | Pharmacy';
            break;
        case '/contact':
            pageTitle = 'Medvance | Contact';
            break;
        case '/login':
            pageTitle = 'Medvance | Login';
            break;
        case '/password/forget':
            pageTitle = 'Medvance | Forget Password';
            break;
       case '/password/reset':
            pageTitle = 'Medvance | Reset Password';
            break;
        case '/signup':
            pageTitle = 'Medvance | Sign Up';
            break;
        case '/signup/create_account':
            pageTitle = 'Medvance | Create Account';
            break;
        default:
            pageTitle = 'Medvance';
            break;
    }

    document.title = pageTitle;
}

updateTitle();
window.addEventListener('popstate', updateTitle);
window.addEventListener('hashchange', updateTitle);

const originalPushState = history.pushState;
history.pushState = function (state, title, url) {
    originalPushState.apply(this, arguments);
    updateTitle();
};

const originalReplaceState = history.replaceState;
history.replaceState = function (state, title, url) {
    originalReplaceState.apply(this, arguments);
    updateTitle();
};
