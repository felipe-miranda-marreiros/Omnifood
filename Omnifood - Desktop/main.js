//mobile navbar starts here
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open');
})
//mobile navbar ends here

//smooth scrollling para nevegadores Safari
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const href = link.getAttribute('href');

        //scroll back to top

        if(href === "#") 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (href !== "#" && href.startsWith('#')) {
            const selectionEL = document.querySelector(href);
            selectionEL.scrollIntoView({behavior: "smooth"})
        }
        //fechando o mobile navbar quando não for mais usado.
        if (link.classList.contains('main-nav-link')){
            headerEl.classList.toggle('nav-open');
        }
    });
});