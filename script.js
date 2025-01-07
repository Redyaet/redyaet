document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            // If the link is an anchor link, prevent default and scroll smoothly
            e.preventDefault();
            const targetID = href.substring(1);
            const targetSection = document.getElementById(targetID);
        if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
