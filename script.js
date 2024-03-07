window.sr = ScrollReveal ({reset: true});
sr.reveal('header, h3', {duration: 1200})

const elements = document.querySelectorAll('main')
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0 // Quando a pessoa entrar no site, a animação já acontece.
}

const callbacks = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
    observer.observe(element)
});